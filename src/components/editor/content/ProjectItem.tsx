import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { faGripVertical, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { type ProjectDetails } from '@/slices/projectSlice.ts';
import { useStore } from '@/store.ts';

export const ProjectItem = ({
  project
}: {
  project: ProjectDetails;
}): ReactElement => {
  const id = project.id;

  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform, isDragging } =
    useSortable({
      id
    });

  const { removeProject } = useStore();

  const handleRemove = (): void => {
    removeProject(id);
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
          title='Reorder Project'
          {...listeners}
          type='button'>
          <FontAwesomeIcon icon={faGripVertical} />
        </button>
        <h1>{project.name}</h1>
      </span>

      <button
        id='trash-btn'
        title='Remove Project'
        type='button'
        onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};
