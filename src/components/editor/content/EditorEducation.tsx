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
import { nanoid } from 'nanoid';
import { useState, type ReactElement, type ChangeEvent } from 'react';

import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { EducationItem } from '@/components/editor/content/EducationItem.tsx';
import { type EducationDetails } from '@/slices/educationSlice.ts';
import { useStore } from '@/store.ts';

export const EditorEducation = (): ReactElement => {
  const section = 'Education';
  const { educations, addEducation, sortEducations, openMenus } = useStore();
  const isVisible = openMenus.includes(section);

  const [educationObj, setEducationObj] = useState<EducationDetails>({
    id: '',
    college: '',
    major: '',
    degree: '',
    startYear: '',
    endYear: ''
  });

  const isDisabled =
    !educationObj.college ||
    !educationObj.major ||
    !educationObj.degree ||
    !educationObj.startYear;

  const handleEducationInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setEducationObj(prevObj => ({
      ...prevObj,
      [id]: value
    }));
  };

  const handleAddEducation = (): void => {
    addEducation({
      ...educationObj,
      id: nanoid()
    });
    setEducationObj({
      id: '',
      college: '',
      major: '',
      degree: '',
      startYear: '',
      endYear: ''
    });
  };

  // Drag & Drop Sorting
  const onDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      const prevIndex = educations.findIndex(
        education => education.id === active.id
      );
      const newIndex = educations.findIndex(
        education => education.id === over?.id
      );
      sortEducations(arrayMove(educations, prevIndex, newIndex));
    }
  };

  return (
    <>
      <DrawerButton section={section} isVisible={isVisible} />

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        {educations.length > 0 && (
          <div className='Education-list'>
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
              <SortableContext
                items={educations}
                strategy={verticalListSortingStrategy}>
                {educations.map(education => (
                  <EducationItem key={education.id} education={education} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}

        <div id='editor-education'>
          <span>
            <label htmlFor='college'>College</label>
            <input
              title=''
              type='text'
              id='college'
              minLength={1}
              maxLength={128}
              value={educationObj.college}
              onInput={handleEducationInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='major'>Major</label>
            <input
              title=''
              type='text'
              id='major'
              minLength={1}
              maxLength={128}
              value={educationObj.major}
              onInput={handleEducationInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <div id='editor-education-date'>
          <span>
            <label htmlFor='degree'>Degree</label>
            <input
              title=''
              type='text'
              id='degree'
              minLength={1}
              maxLength={128}
              value={educationObj.degree}
              onInput={handleEducationInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='startYear'>Start Year</label>
            <input
              title=''
              type='text'
              id='startYear'
              minLength={1}
              maxLength={64}
              value={educationObj.startYear}
              onInput={handleEducationInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='endYear'>End Year</label>
            <input
              title=''
              type='text'
              id='endYear'
              minLength={1}
              maxLength={64}
              value={educationObj.endYear}
              onInput={handleEducationInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <button
          className='add-button'
          type='button'
          onClick={handleAddEducation}
          disabled={isDisabled}>
          Add
        </button>
      </div>
    </>
  );
};
