import { type ReactElement } from 'react';

export const Education = (): ReactElement => {
  const COLLEGES = [
    {
      name: 'Azerbaijan State Oil and Industry University',
      major: 'Artificial Intelligence',
      degree: "Master's",
      startYear: '2022',
      endYear: ''
    },
    {
      name: 'Azerbaijan State Oil and Industry University',
      major: 'Computer Engineering',
      degree: "Bachelor's",
      startYear: '2018',
      endYear: '2022'
    }
  ];

  return (
    <div id='education'>
      <h1>Education</h1>

      {COLLEGES.map((college, index) => (
        <div key={index}>
          <span>
            <h2>{college.name}</h2>
            <h3>
              {college.startYear} -{' '}
              {college.endYear ? college.endYear : 'Present'}
            </h3>
          </span>

          <p>
            {college.major} {college.degree}
          </p>
        </div>
      ))}
    </div>
  );
};
