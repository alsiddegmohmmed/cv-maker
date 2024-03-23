import { type ChangeEvent, type ReactElement } from 'react';

import { useStore } from '@/store.ts';

export const EditorPersonal = (): ReactElement => {
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

      <label htmlFor='Portfolio'>Portfolio Link</label>
      <input
        title=''
        id='Portfolio'
        type='text'
        minLength={1}
        maxLength={128}
        value={person.links.Portfolio}
        onInput={handleLinkInput}
      />

      <label htmlFor='GitHub'>GitHub Link</label>
      <input
        title=''
        id='GitHub'
        type='text'
        minLength={1}
        maxLength={128}
        value={person.links.GitHub}
        onInput={handleLinkInput}
      />

      <label htmlFor='LinkedIn'>LinkedIn Link</label>
      <input
        title=''
        id='LinkedIn'
        type='text'
        minLength={1}
        maxLength={128}
        value={person.links.LinkedIn}
        onInput={handleLinkInput}
      />
    </>
  );
};
