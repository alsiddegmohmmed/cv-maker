import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, type ChangeEvent, type ReactElement } from 'react';

import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { useStore } from '@/store.ts';

export const EditorPersonal = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const { person, setPerson } = useStore();

  const handlePersonInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      ...person,
      [e.target.id]: e.target.value.trim()
    });
  };

  const handleLinkInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setPerson({
      ...person,
      links: {
        ...person.links,
        [e.target.id]: e.target.value.trim()
      }
    });
  };

  return (
    <>
      <div className='editor-accordion'>
        <h1>Personal Info</h1>
        <DrawerButton isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        <div id='editor-personal'>
          <span>
            <label htmlFor='name'>Full Name</label>
            <input
              title=''
              id='name'
              type='text'
              minLength={1}
              maxLength={128}
              value={person.name}
              onInput={handlePersonInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='title'>Profession</label>
            <input
              title=''
              id='title'
              type='text'
              minLength={1}
              maxLength={128}
              value={person.title}
              onInput={handlePersonInput}
              autoCapitalize='words'
            />
          </span>

          <span>
            <label htmlFor='email'>Email</label>
            <input
              title=''
              id='email'
              type='email'
              minLength={1}
              maxLength={128}
              value={person.email}
              onInput={handlePersonInput}
            />
          </span>

          <span>
            <label htmlFor='phone'>Phone</label>
            <input
              title=''
              id='phone'
              type='tel'
              minLength={9}
              maxLength={18}
              value={person.phone}
              onInput={handlePersonInput}
              pattern='^(\+?\d{1,3}\s?)?(\(\d{2,3}\)|\d{2,3})[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$'
            />
          </span>
        </div>

        <div id='editor-personal-links'>
          <span>
            <label htmlFor='Portfolio'>
              Portfolio <FontAwesomeIcon size='sm' icon={faLink} />
            </label>
            <input
              title=''
              id='Portfolio'
              type='text'
              minLength={1}
              maxLength={256}
              value={person.links.Portfolio}
              onInput={handleLinkInput}
            />
          </span>

          <span>
            <label htmlFor='GitHub'>
              GitHub <FontAwesomeIcon size='sm' icon={faLink} />
            </label>
            <input
              title=''
              id='GitHub'
              type='text'
              minLength={1}
              maxLength={256}
              value={person.links.GitHub}
              onInput={handleLinkInput}
            />
          </span>

          <span>
            <label htmlFor='LinkedIn'>
              LinkedIn <FontAwesomeIcon size='sm' icon={faLink} />
            </label>
            <input
              title=''
              id='LinkedIn'
              type='text'
              minLength={1}
              maxLength={256}
              value={person.links.LinkedIn}
              onInput={handleLinkInput}
            />
          </span>
        </div>
      </div>
    </>
  );
};
