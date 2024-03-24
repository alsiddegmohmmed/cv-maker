import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, type ReactElement, type ChangeEvent } from 'react';

import { type ExperienceDetails } from '@/slices/experienceSlice.ts';
import { useStore } from '@/store.ts';

export const EditorExperience = (): ReactElement => {
  const { addExperience } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [experienceObj, setExperienceObj] = useState<ExperienceDetails>({
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
    experienceObj.descriptions.some(desc => desc.trim() === '');

  const toggleVisibility = (): void => {
    setIsVisible(prev => !prev);
  };

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
      descriptions
    });
  };

  const handleAddExperience = (): void => {
    addExperience(experienceObj);
    setExperienceObj({
      employer: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      descriptions: []
    });
  };

  return (
    <>
      <div className='editor-accordion'>
        <h1>Experience</h1>
        <button type='button' onClick={toggleVisibility}>
          <FontAwesomeIcon
            size='lg'
            icon={isVisible ? faChevronUp : faChevronDown}
          />
        </button>
      </div>

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
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
