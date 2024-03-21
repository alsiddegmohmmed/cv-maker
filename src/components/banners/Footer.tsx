import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'react';

export const Footer = (): ReactElement => (
  <footer>
    © 2024{' '}
    <a
      title='Source'
      target='_blank'
      type='text/html'
      className='external'
      href='https://github.com/eldarlrd/cv-maker'
      rel='noopener noreferrer nofollow external author'>
      <FontAwesomeIcon icon={faGithub} /> eldarlrd
    </a>
  </footer>
);
