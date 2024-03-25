import { type ChangeEvent, type ReactElement } from 'react';

import { DrawerButton } from '@/components/editor/content/DrawerButton.tsx';
import { useStore } from '@/store.ts';

export const ESkills = (): ReactElement => {
  const section = 'Skills';
  const { skills, setSkill, openMenus } = useStore();
  const isVisible = openMenus.includes(section);

  const handleSkillInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setSkill({
      ...skills,
      [e.target.id]: e.target.value
    });
  };

  return (
    <>
      <DrawerButton section={section} isVisible={isVisible} />

      <div className={`${isVisible ? '' : 'closed'} editor-section`}>
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
