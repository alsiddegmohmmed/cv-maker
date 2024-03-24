import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { type ExperienceDetails } from '@/slices/experienceSlice.ts';
import { useStore } from '@/store.ts';

export const ExperienceList = ({
  experience
}: {
  experience: ExperienceDetails;
}): ReactElement => {
  const id = experience.id;
  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform } = useSortable({
    id
  });

  const { removeExperience } = useStore();

  const handleRemove = (): void => {
    removeExperience(id);
  };

  const style = {
    transition,
    transform: CSS.Translate.toString(transform)
  };

  return (
    <div id={id} className='experience-item' ref={setNodeRef} style={style}>
      <div>{experience.employer}</div>
      <button {...listeners} type='button' title='Drag Project'>
        <FontAwesomeIcon size='sm' icon={faGripVertical} />
      </button>
      <button type='button' onClick={handleRemove}>
        <FontAwesomeIcon size='sm' icon={faTrash} />
      </button>
    </div>
  );
};
