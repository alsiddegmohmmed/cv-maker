import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const DrawerButton = ({
  section,
  isVisible
}: {
  section: string;
  isVisible: boolean;
}): ReactElement => {
  const { toggleMenu } = useStore();

  const toggleVisibility = (): void => {
    toggleMenu(section);
  };

  return (
    <button type='button' className='editor-menu' onClick={toggleVisibility}>
      <h1>{section}</h1>
      <div className={isVisible ? 'open' : ''}>
        <FontAwesomeIcon size='lg' icon={faChevronDown} />
      </div>
    </button>
  );
};
