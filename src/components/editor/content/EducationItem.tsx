import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { type EducationDetails } from '@/slices/educationSlice.ts';
import { useStore } from '@/store.ts';

export const EducationItem = ({
  education
}: {
  education: EducationDetails;
}): ReactElement => {
  const id = education.id;

  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform, isDragging } =
    useSortable({
      id
    });

  const { removeEducation } = useStore();

  const handleRemove = (): void => {
    removeEducation(id);
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
          title='Reorder Education'
          {...listeners}
          type='button'>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <h1>{education.major}</h1>
      </span>

      <button
        id='trash-btn'
        title='Remove Education'
        type='button'
        onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
