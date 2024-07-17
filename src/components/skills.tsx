"use client";
import React from "react";
import { useInView } from "react-intersection-observer";
import { SFlex, SGrid } from "./base/styles/layout";
import { SParagraph, SText } from "./base/styles/typography";
import styled, { css } from "styled-components";

const SParrot = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }
  @media (max-width: 425px) {
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

const SProgressBarList = styled.div`
  display: grid;
  gap: 10px;
`;

interface ProgressBarProps {
  skillsInView: boolean;
  skillPercentage: string;
  index: number;
}

const SProgressBar = styled.div<ProgressBarProps>`
  display: flex;
  background: var(--colors-gray-darker);
  position: relative;
  padding: 5px;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  border-radius: 6px;
  img {
    position: relative;
    width: 20px;
  }
  > div {
    position: relative;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--colors-red-darker);
    transition: all 1s ease;
    border-right: 8px solid var(--colors-red-medium);
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &::before {
    width: ${({ skillsInView, skillPercentage }) =>
      skillsInView ? skillPercentage : 0};
    transition-delay: ${({ index }) => index * 0.1}s;
  }
`;

const SStyledText = styled(SText)`
  color: var(--colors-red-medium);
`;

interface Skill {
  name: string;
  percentage: string;
  image: string;
}

interface skillsProps {
  skills: Skill[];
}

const SWrapper = styled(SGrid)`
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SHeader = styled(SFlex)`
  justify-content: space-between;
  margin-bottom: 15px;
  align-content: center;
  & > div {
    display: flex;
    gap: 10px;
    align-items: center;
    img {
      display: block;
      margin-top: -8px;
    }
    p {
      @media (max-width: 425px) {
        font-size: 12px;
      }
    }
  }
`;

export default function Skills({ skills }: skillsProps) {
  const [skillsRef, skillsInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const getCurrentMonth = () => {
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  };
  const getCurrentYear = () => {
    const date = new Date();
    return new Intl.DateTimeFormat("en-US", { year: "numeric" }).format(date);
  };
  return (
    <div>
      <SWrapper>
        <div>
          <SHeader>
            <div>
              <SText>Beginner</SText>
              <SParrot>
                <img alt="Parrot" src="/technologies/parrot.gif" />
              </SParrot>
            </div>
            <div>
              <SStyledText>|</SStyledText>
            </div>
            <div>
              <SText>Intermediate</SText>
              <SParrot>
                <img alt="Parrot" src="/technologies/fastparrot.gif" />
              </SParrot>
            </div>
            <div>
              <SStyledText>|</SStyledText>
            </div>
            <div>
              <SText>Advanced</SText>
              <SParrot>
                <img alt="Parrot" src="/technologies/hyperfastparrot.gif" />
              </SParrot>
            </div>
          </SHeader>
          <SProgressBarList ref={skillsRef}>
            {skills.map((skill, index) => (
              <SProgressBar
                skillsInView={skillsInView}
                skillPercentage={skill.percentage}
                index={index}
                key={skill.name}
              >
                <img alt={skill.name} src={skill.image} />
                <div>{skill.name}</div>
              </SProgressBar>
            ))}
          </SProgressBarList>
        </div>
        <div>
          <SParagraph>
            This is my updated skills section as{" "}
            <strong>
              {getCurrentMonth()}, {getCurrentYear()}.
            </strong>{" "}
            <br /> I am a follower of the
            <strong> Kaizen 改善</strong> philosophy, which means continuous
            improvement. Therefore, you will see this list keep improving over
            time!
          </SParagraph>
        </div>
      </SWrapper>
    </div>
  );
}
