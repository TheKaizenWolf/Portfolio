import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const ProjectSection = styled.div.attrs({
  className: 'tc pt2',
})`
  .heading {
    ${tw`text-5xl text-bold text-center py-5 my-5 text-white bg-purple-800 lg:mx-24 rounded-full`}
    border-bottom: 8px solid #A463F2;
    font-family: 'Proxima Nova Black';
    @media (max-width: 30rem) {
      font-size: 2.5rem;
    }
  }
  .project-heading {
    ${tw`text-4xl font-bold text-white pt-4 pb-4`}
    font-family: 'Proxima Nova Black'
  }
  .image {
    border-top: 12px solid #a463f2;
    border-bottom: 12px solid #a463f2;
    width: 31.5rem;
  }
  .projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .project {
      ${tw`text-center bg-purple-800 rounded-lg shadow-xl m-2`}
      max-width: 400px;
      @media (max-width: 60rem) {
        max-width: 300px;
      }
      .project-text-div {
        ${tw`pt-2 pb-2`}
        .project-text {
          ${tw`text-xl text-white px-5 pb-5 `}
        }
        font-family: 'Proxima Nova Black';
      }
    }
  }
`;

const Projects = () => (
  <ProjectSection>
    <div>
      <h1 className="heading">My Projects</h1>
    </div>
    <div className="projects">
      <div className="project">
        <h1 className="project-heading">Sick-Fits</h1>
        <a href="https://sickfits-nextjs-prod.herokuapp.com">
          <img
            className="image"
            loading="lazy"
            src="img/sickfits.png"
            alt="sickfits"
          />
        </a>
        <div className="project-text-div">
          <p className="project-text">
            This project is a e-commerce store implementing a full generated
            CRUD API. It uses React, Apollo, GraphQL and Prisma.
          </p>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Now That's Delicious!</h1>
        <a href="https://now-thats-delicious-raul.herokuapp.com/">
          <img
            className="image"
            loading="lazy"
            src="img/delicious.png"
            alt="now-thats-delicious"
          />
        </a>
        <div className="project-text-div">
          <p className="project-text">
            This is a restaurants app that uses Node.js, Express.js, MongoDB,
            and Pug for the Frontend.
          </p>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Face-App</h1>
        <a href="https://github.com/TheKaizenWolf/face-recognition-app">
          <img
            className="image"
            loading="lazy"
            src="img/face.png"
            alt="Face-App"
          />
        </a>
        <div className="project-text-div">
          <p className="project-text">
            This project is a face-recognition-app that utilizes the Clarifai
            API. It uses React, Node.js, and Express.
          </p>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Roboamigos</h1>
        <a href="https://github.com/TheKaizenWolf/roboamigos">
          <img
            className="image"
            loading="lazy"
            src="img/robo.png"
            alt="Roboamigos"
          />
        </a>
        <div className="project-text-div">
          <p className="project-text">
            This project is a React App that utilizes robohash for the robots,
            and fake JSON for their data.
          </p>
        </div>
      </div>
      <div className="project">
        <h1 className="project-heading">Hacker News</h1>
        <a href="https://github.com/TheKaizenWolf/hacker-full-clone">
          <img
            className="image"
            loading="lazy"
            src="img/hacker-clone.png"
            alt="Hacker News Clone"
          />
        </a>
        <div className="project-text-div">
          <p className="project-text">
            This is a Hacker News clone that uses React.js + Material UI +
            Node.js + Express + MongoDB and it is fully dockerized.
          </p>
        </div>
      </div>
    </div>
  </ProjectSection>
);

export default Projects;
