import { DateTime } from 'luxon';
import { type ReactElement } from 'react';

export const PreviewExperience = (): ReactElement => {
  const WORKPLACES = [
    {
      company: 'AI Solutions',
      position: 'Front End Developer',
      location: 'Baku, Azerbaijan',
      startDate: DateTime.fromISO('2023-01'),
      endDate: DateTime.fromISO('2023-06'),
      descriptions: [
        'Developed the interface of the cross-platform smart home mobile app "BHouse" using React Native and TypeScript.',
        'Integrated the client-side app with the .Net Back End using Redux Toolkit Query.'
      ]
    },
    {
      company: 'Pasha Bank',
      position: 'Front End Intern',
      location: 'Baku, Azerbaijan',
      startDate: DateTime.fromISO('2022-08'),
      endDate: DateTime.fromISO('2022-12'),
      descriptions: ['A Front End Intern at Pasha Bank, React and TypeScript.']
    }
  ];

  return (
    <div id='experience' className='content'>
      <h1>EXPERIENCE</h1>

      {WORKPLACES.map(workplace => (
        <div key={workplace.company + workplace.position}>
          <span>
            <h2>
              {workplace.company} | {workplace.position}
            </h2>
            <h3>
              {workplace.location} | {workplace.startDate.toFormat('MMM y')} -{' '}
              {workplace.endDate.year ?
                workplace.endDate.toFormat('MMM y')
              : 'Present'}
            </h3>
          </span>

          <ul>
            {workplace.descriptions.map(description => (
              <li key={description}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
