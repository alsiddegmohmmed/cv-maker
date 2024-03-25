import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nanoid } from 'nanoid';
import { useState, type ReactElement, type ChangeEvent } from 'react';

import { DndList, type ListProps } from '@/components/editor/menus/DndList.tsx';
import { DrawerButton } from '@/components/editor/menus/DrawerButton.tsx';
import { type ProjectDetails } from '@/slices/projectsSlice.ts';
import { useStore } from '@/store.ts';

export const EProjects = (): ReactElement => {
  const section = 'Projects';
  const { projects, sortProjects, addProject, removeProject, openMenus } =
    useStore();
  const isVisible = openMenus.includes(section);

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

  return (
    <>
      <DrawerButton section={section} isVisible={isVisible} />

      <div className={`${isVisible ? '' : 'closed'} editor-section`}>
        <DndList
          nameKey='name'
          itemArr={projects as ListProps[]}
          handleSort={sortProjects}
          handleRemove={removeProject}
        />

        <div className='two-column'>
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
          type='button'
          className='add-btn'
          onClick={handleAddProject}
          disabled={isDisabled}>
          Add
        </button>
      </div>
    </>
  );
};
