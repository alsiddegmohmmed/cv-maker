import { faCircleDown, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';
import { ReactToPrint } from 'react-to-print';

import { useResetStore, useStore } from '@/store.ts';

export const Actions = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => {
  const { person } = useStore();

  const kebabize = (str: string): string => str.trim().replaceAll(' ', '_');

  return (
    <div id='actions'>
      <button
        type='button'
        id='reset-btn'
        className='action-btn'
        onClick={useResetStore}>
        <FontAwesomeIcon icon={faRotate} /> Reset
      </button>

      <ReactToPrint
        trigger={() => (
          <button type='button' id='download-btn' className='action-btn'>
            <FontAwesomeIcon icon={faCircleDown} /> Download
          </button>
        )}
        content={() => printRef.current}
        documentTitle={kebabize(`${person.name} ${person.title} CV`)}
        pageStyle='main {
            margin: 0 !important;
            width: 100% !important;
            box-shadow: none !important;
            max-height: none !important;
            max-width: 100svw !important;
            min-height: 100svh !important;
          }'
      />
    </div>
  );
};
