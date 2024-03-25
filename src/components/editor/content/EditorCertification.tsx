import { DndContext, type DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useState, type ReactElement, type ChangeEvent } from 'react';

import { CertificationItem } from '@/components/editor/content/CertificationItem.tsx';
import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { type CertificationDetails } from '@/slices/certificationSlice.ts';
import { useStore } from '@/store.ts';

export const EditorCertification = (): ReactElement => {
  const { certifications, addCertification, sortCertifications } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [certificationObj, setCertificationObj] =
    useState<CertificationDetails>({
      id: '',
      title: '',
      issuer: '',
      link: ''
    });

  const isDisabled =
    !certificationObj.title ||
    !certificationObj.link ||
    !certificationObj.issuer;

  const handleCertificationInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setCertificationObj(prevObj => ({
      ...prevObj,
      [id]: value
    }));
  };

  const handleAddCertification = (): void => {
    addCertification({
      ...certificationObj,
      id: nanoid()
    });
    setCertificationObj({
      id: '',
      title: '',
      issuer: '',
      link: ''
    });
  };

  // Drag & Drop Sorting
  const onDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      const prevIndex = certifications.findIndex(
        certification => certification.id === active.id
      );
      const newIndex = certifications.findIndex(
        certification => certification.id === over?.id
      );
      sortCertifications(arrayMove(certifications, prevIndex, newIndex));
    }
  };

  return (
    <>
      <div className='editor-accordion'>
        <h1>Certifications</h1>
        <DrawerButton isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        {certifications.length > 0 && (
          <div className='certification-list'>
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
              <SortableContext
                items={certifications}
                strategy={verticalListSortingStrategy}>
                {certifications.map(certification => (
                  <CertificationItem
                    key={certification.id}
                    certification={certification}
                  />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}

        <div id='editor-certification'>
          <span>
            <label htmlFor='title'>Title</label>
            <input
              title=''
              type='text'
              id='title'
              minLength={1}
              maxLength={128}
              value={certificationObj.title}
              onInput={handleCertificationInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <div id='editor-certification-issuer'>
          <span>
            <label htmlFor='issuer'>Issuer</label>
            <input
              title=''
              type='text'
              id='issuer'
              minLength={1}
              maxLength={128}
              value={certificationObj.issuer}
              onInput={handleCertificationInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='link'>
              Link <FontAwesomeIcon size='sm' icon={faLink} />
            </label>
            <input
              title=''
              type='text'
              id='link'
              minLength={1}
              maxLength={128}
              value={certificationObj.link}
              onInput={handleCertificationInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <button
          className='add-button'
          type='button'
          onClick={handleAddCertification}
          disabled={isDisabled}>
          Add
        </button>
      </div>
    </>
  );
};