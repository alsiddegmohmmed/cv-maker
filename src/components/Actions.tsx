import { faCircleDown, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';
import { ReactToPrint } from 'react-to-print';

import { useResetStore } from '@/store.ts';

export const Actions = ({
  printRef
}: {
  printRef: React.RefObject<HTMLElement>;
}): ReactElement => {
  return (
    <div id='actions'>
      <button
        type='button'
        id='reset-btn'
        className='editor-action'
        onClick={useResetStore}>
        <FontAwesomeIcon icon={faRotate} /> Reset
      </button>
      <ReactToPrint
        trigger={() => (
          <button type='button' id='download-btn' className='editor-action'>
            <FontAwesomeIcon icon={faCircleDown} /> Download
          </button>
        )}
        content={() => printRef.current}
        documentTitle='Eldar Pashazade CV'
        pageStyle='main {
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
