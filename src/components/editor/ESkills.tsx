import { type ChangeEvent, type ReactElement } from 'react';

import { DrawerButton } from '@/components/editor/menus/DrawerButton.tsx';
import { SKILLSETS } from '@/components/preview/PSkills.tsx';
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
        {Object.entries(SKILLSETS).map(([id, set]) => (
          <span key={id}>
            <label htmlFor={id}>{set}</label>
            <input
              title=''
              id={id}
              type='text'
              minLength={1}
              maxLength={1024}
              value={skills[id as keyof typeof SKILLSETS]}
              onInput={handleSkillInput}
              autoCapitalize='words'
            />
          </span>
        ))}
      </div>
    </>
  );
};
