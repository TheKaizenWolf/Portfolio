import React from 'react';
import { useInView } from 'react-intersection-observer';
import { styled } from '../stitches';
import { SGrid } from './base/styles/Layout';
import { SParagraph } from './base/styles/Typography';

const SProgressBarList = styled('div', {
  display: 'grid',
  gap: '10px',
});
const SProgressBar = styled('div', {
  display: 'flex',
  background: '$grayDarker',
  position: 'relative',
  padding: '5px',
  gap: '10px',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '6px',
  img: {
    position: 'relative',
    width: '20px',
  },
  '> div': {
    position: 'relative',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '$redDark',
    transition: 'all 1s ease',
    borderRight: '8px solid $redMedium',
    borderTopRightRadius: '6px',
    borderBottomRightRadius: '6px',
  },
});

export default function Skills({ skills }) {
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const getCurrentMonth = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
  };
  const getCurrentYear = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date);
  };
  return (
    <div>
      <SGrid
        css={{
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '40px',
          '@bpLg': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <SProgressBarList ref={skillsRef}>
          {skills.map((skill, index) => (
            <SProgressBar
              css={{
                '&::before': {
                  width: skillsInView ? skill.percentage : 0,
                  transitionDelay: `${index * 0.1}s`,
                },
              }}
              key={skill.name}
            >
              <img src={skill.image} />
              <div>{skill.name}</div>
            </SProgressBar>
          ))}
        </SProgressBarList>
        <SParagraph>
          This is my updated skills section as{' '}
          <strong>
            {getCurrentMonth()}, {getCurrentYear()}.
          </strong>{' '}
          <br /> I am a follower of the
          <strong> Kaizen 改善</strong> philosophy, which means continuous
          improvement. Therefore, you will see this list keep improving over
          time!
        </SParagraph>
      </SGrid>
    </div>
  );
}
