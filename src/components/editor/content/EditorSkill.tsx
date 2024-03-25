import { useState, type ChangeEvent, type ReactElement } from 'react';

import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { useStore } from '@/store.ts';

export const EditorSkill = (): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const { skills, setSkill } = useStore();

  const handleSkillInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setSkill({
      ...skills,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <DrawerButton
        section='Skills'
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />

      <div className={`${isVisible ? '' : 'hide'} editor-section-container`}>
        <span>
          <label htmlFor='progLang'>Programming Languages</label>
          <input
            title=''
            id='progLang'
            type='text'
            minLength={1}
            maxLength={1024}
            value={skills.progLang}
            onInput={handleSkillInput}
            autoCapitalize='words'
          />
        </span>

        <span>
          <label htmlFor='libFrame'>Libraries / Frameworks</label>
          <input
            title=''
            id='libFrame'
            type='text'
            minLength={1}
            maxLength={1024}
            value={skills.libFrame}
            onInput={handleSkillInput}
            autoCapitalize='words'
          />
        </span>

        <span>
          <label htmlFor='toolPlat'>Tools / Platforms</label>
          <input
            title=''
            id='toolPlat'
            type='text'
            minLength={1}
            maxLength={1024}
            value={skills.toolPlat}
            onInput={handleSkillInput}
            autoCapitalize='words'
          />
        </span>

        <span>
          <label htmlFor='databases'>Databases</label>
          <input
            title=''
            id='databases'
            type='text'
            minLength={1}
            maxLength={1024}
            value={skills.databases}
            onInput={handleSkillInput}
            autoCapitalize='words'
          />
        </span>
      </div>
    </>
  );
};
