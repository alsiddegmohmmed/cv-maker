import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Dispatch, type ReactElement, type SetStateAction } from 'react';

export const DrawerButton = ({
  section,
  isVisible,
  setIsVisible
}: {
  section: string;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
  const toggleVisibility = (): void => {
    setIsVisible(prev => !prev);
  };

  return (
    <button
      type='button'
      className='editor-accordion'
      onClick={toggleVisibility}>
      <h1>{section}</h1>
      <div className={isVisible ? 'open' : ''}>
        <FontAwesomeIcon size='lg' icon={faChevronDown} />
      </div>
    </button>
  );
};
