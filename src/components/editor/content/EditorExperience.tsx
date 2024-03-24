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
import { ExperienceList } from '@/components/editor/content/ExperienceList.tsx';
import { type ExperienceDetails } from '@/slices/experienceSlice.ts';
import { useStore } from '@/store.ts';

export const EditorExperience = (): ReactElement => {
  const { experiences, addExperience, sortExperiences } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [experienceObj, setExperienceObj] = useState<ExperienceDetails>({
    id: '',
    employer: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    descriptions: []
  });

  const isDisabled =
    !experienceObj.employer ||
    !experienceObj.position ||
    !experienceObj.location ||
    !experienceObj.startDate ||
    !(experienceObj.descriptions.length > 0) ||
    experienceObj.descriptions.some(desc => desc.trim() === '');

  const handleExperienceInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setExperienceObj(prevObj => ({
      ...prevObj,
      [id]: value.trim()
    }));
  };

  const handleDescriptionsInput = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const descriptions = e.target.value
      .split('\n\n')
      .map(block => block.trim());
    setExperienceObj({
      ...experienceObj,
      id: nanoid(),
      descriptions
    });
  };

  const handleAddExperience = (): void => {
    addExperience(experienceObj);
    setExperienceObj({
      id: '',
      employer: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      descriptions: []
    });
  };

  // Drag & Drop Sorting
  const onDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      const prevIndex = experiences.findIndex(
        experience => experience.id === active.id
      );
      const newIndex = experiences.findIndex(
        experience => experience.id === over?.id
      );
      sortExperiences(arrayMove(experiences, prevIndex, newIndex));
    }
  };

  return (
    <>
      <div className='editor-accordion'>
        <h1>Experience</h1>
        <DrawerButton isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        {experiences.length > 0 && (
          <div className='experience-list'>
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
              <SortableContext
                items={experiences}
                strategy={verticalListSortingStrategy}>
                {experiences.map(experience => (
                  <ExperienceList key={experience.id} experience={experience} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}

        <div id='editor-experience'>
          <span>
            <label htmlFor='employer'>Employer</label>
            <input
              title=''
              type='text'
              id='employer'
              minLength={1}
              maxLength={128}
              value={experienceObj.employer}
              onInput={handleExperienceInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='position'>Position</label>
            <input
              title=''
              type='text'
              id='position'
              minLength={1}
              maxLength={128}
              value={experienceObj.position}
              onInput={handleExperienceInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <div id='editor-experience-date'>
          <span>
            <label htmlFor='location'>Location</label>
            <input
              title=''
              type='text'
              id='location'
              minLength={1}
              maxLength={128}
              value={experienceObj.location}
              onInput={handleExperienceInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='startDate'>Start Date</label>
            <input
              title=''
              type='text'
              id='startDate'
              minLength={1}
              maxLength={64}
              value={experienceObj.startDate}
              onInput={handleExperienceInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='endDate'>End Date</label>
            <input
              title=''
              type='text'
              id='endDate'
              minLength={1}
              maxLength={64}
              value={experienceObj.endDate}
              onInput={handleExperienceInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <span>
          <label htmlFor='descriptions'>Description</label>
          <textarea
            title=''
            rows={6}
            minLength={1}
            maxLength={4000}
            id='descriptions'
            spellCheck={false}
            value={experienceObj.descriptions.join('\n\n')}
            onInput={handleDescriptionsInput}
          />
        </span>

        <button
          className='add-button'
          type='button'
          onClick={handleAddExperience}
          disabled={isDisabled}>
          Add
        </button>
      </div>
    </>
  );
};
