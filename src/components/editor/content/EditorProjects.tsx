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

import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { ProjectItem } from '@/components/editor/content/ProjectItem.tsx';
import { type ProjectDetails } from '@/slices/projectSlice.ts';
import { useStore } from '@/store.ts';

export const EditorProjects = (): ReactElement => {
  const { projects, addProject, sortProjects } = useStore();
  const [isVisible, setIsVisible] = useState(false);
  const [projectObj, setProjectObj] = useState<ProjectDetails>({
    id: '',
    name: '',
    link: '',
    stack: '',
    descriptions: []
  });

  const isDisabled =
    !projectObj.name ||
    !projectObj.link ||
    !projectObj.stack ||
    !(projectObj.descriptions.length > 0) ||
    projectObj.descriptions.some(desc => desc.trim() === '');

  const handleProjectInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    setProjectObj(prevObj => ({
      ...prevObj,
      [id]: value
    }));
  };

  const handleDescriptionsInput = (
    e: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const descriptions = e.target.value.split('\n\n').map(block => block);
    setProjectObj({
      ...projectObj,
      descriptions
    });
  };

  const handleAddProject = (): void => {
    addProject({
      ...projectObj,
      id: nanoid()
    });
    setProjectObj({
      id: '',
      name: '',
      link: '',
      stack: '',
      descriptions: []
    });
  };

  // Drag & Drop Sorting
  const onDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;
    if (active.id !== over?.id) {
      const prevIndex = projects.findIndex(project => project.id === active.id);
      const newIndex = projects.findIndex(project => project.id === over?.id);
      sortProjects(arrayMove(projects, prevIndex, newIndex));
    }
  };

  return (
    <>
      <div className='editor-accordion'>
        <h1>Projects</h1>
        <DrawerButton isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        {projects.length > 0 && (
          <div className='project-list'>
            <DndContext
              onDragEnd={onDragEnd}
              collisionDetection={closestCenter}
              modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
              <SortableContext
                items={projects}
                strategy={verticalListSortingStrategy}>
                {projects.map(project => (
                  <ProjectItem key={project.id} project={project} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        )}

        <div id='editor-project'>
          <span>
            <label htmlFor='name'>Name</label>
            <input
              title=''
              type='text'
              id='name'
              minLength={1}
              maxLength={128}
              value={projectObj.name}
              onInput={handleProjectInput}
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
              value={projectObj.link}
              onInput={handleProjectInput}
              autoCapitalize='words'
            />
          </span>
        </div>

        <div id='editor-project-stack'>
          <span>
            <label htmlFor='stack'>Stack</label>
            <input
              title=''
              type='text'
              id='stack'
              minLength={1}
              maxLength={256}
              value={projectObj.stack}
              onInput={handleProjectInput}
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
            value={projectObj.descriptions.join('\n\n')}
            onInput={handleDescriptionsInput}
          />
        </span>

        <button
          className='add-button'
          type='button'
          onClick={handleAddProject}
          disabled={isDisabled}>
          Add
        </button>
      </div>
    </>
  );
};
