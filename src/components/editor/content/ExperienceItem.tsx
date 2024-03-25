import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { type ExperienceDetails } from '@/slices/experienceSlice.ts';
import { useStore } from '@/store.ts';

export const ExperienceItem = ({
  experience
}: {
  experience: ExperienceDetails;
}): ReactElement => {
  const id = experience.id;

  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform, isDragging } =
    useSortable({
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
    <div
      id={id}
      className={`${isDragging ? 'dragging' : ''} list-item`}
      ref={setNodeRef}
      style={style}>
      <span>
        <button
          id='drag-btn'
          title='Reorder Experience'
          {...listeners}
          type='button'>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <h1>{experience.employer}</h1>
      </span>

      <button
        id='trash-btn'
        title='Remove Experience'
        type='button'
        onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
