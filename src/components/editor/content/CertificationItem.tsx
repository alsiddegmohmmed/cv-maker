import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { type CertificationDetails } from '@/slices/certificationsSlice.ts';
import { useStore } from '@/store.ts';

export const CertificationItem = ({
  certification
}: {
  certification: CertificationDetails;
}): ReactElement => {
  const id = certification.id;

  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform, isDragging } =
    useSortable({
      id
    });

  const { removeCertification } = useStore();

  const handleRemove = (): void => {
    removeCertification(id);
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
          title='Reorder Certification'
          {...listeners}
          type='button'>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <h1>{certification.title}</h1>
      </span>

      <button
        id='trash-btn'
        title='Remove Certification'
        type='button'
        onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
