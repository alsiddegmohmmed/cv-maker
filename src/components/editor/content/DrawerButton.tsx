import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type Dispatch, type ReactElement, type SetStateAction } from 'react';

export const DrawerButton = ({
  isVisible,
  setIsVisible
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
  const toggleVisibility = (): void => {
    setIsVisible(prev => !prev);
  };

  return (
    <button
      aria-label={isVisible ? 'Close Section' : 'Open Section'}
      type='button'
      onClick={toggleVisibility}>
      <FontAwesomeIcon
        size='lg'
        icon={isVisible ? faChevronUp : faChevronDown}
      />
    </button>
  );
};
