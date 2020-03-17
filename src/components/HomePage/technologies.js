import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const TechnologiesSection = styled.div.attrs({
  className: 'text-center',
})`
  .heading {
    ${tw`text-5xl text-bold text-center py-5 text-white bg-purple-800 lg:mx-24 rounded-full`}
    border-bottom: 8px solid #A463F2;
    font-family: 'Proxima Nova Black';
    @media (max-width: 30rem) {
      font-size: 2.5rem;
    }
  }
  .technologies {
    ${tw`mt-2`}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .technology {
      ${tw`m-4`}
      img {
        width: 275px;
        margin: 0 auto;
      }
      @media (max-width: 60rem) {
        img {
          width: 200px;
        }
      }
      @media (max-width: 30rem) {
        img {
          width: 100px;
        }
      }
      .technology-heading {
        ${tw`text-2xl lg:text-3xl text-white rounded-full mt-3 p-1`}
        background: #A463F2;
        font-family: 'Proxima Nova Black';
      }
    }
  }
`;

const Technologies = () => (
  <TechnologiesSection>
    <div>
      <h1 className="heading">Technologies</h1>
    </div>
    <div className="technologies">
      <div className="technology">
        <img src="img/html.png" alt="html" />
        <h2 className="technology-heading">HTML</h2>
      </div>
      <div className="technology">
        <img src="img/css.png" alt="css" />
        <h2 className="technology-heading">CSS</h2>
      </div>
      <div className="technology">
        <img src="img/javascript.png" alt="javascript" />
        <h2 className="technology-heading">Javascript</h2>
      </div>
      <div className="technology">
        <img src="img/react.png" alt="react" />
        <h2 className="technology-heading">React</h2>
      </div>
      <div className="technology">
        <img src="img/typescript.png" alt="typescript" />
        <h2 className="technology-heading">Typescript</h2>
      </div>
      <div className="technology">
        <img src="img/apollo.png" alt="apollo" />
        <h2 className="technology-heading">Apollo</h2>
      </div>
      <div className="technology">
        <img src="img/nodejs.png" alt="nodejs" />
        <h2 className="technology-heading">Nodejs</h2>
      </div>
      <div className="technology">
        <img src="img/graphql.png" alt="graphql" />
        <h2 className="technology-heading">GraphQL</h2>
      </div>
      <div className="technology">
        <img src="img/mongodb.png" alt="mongodb" />
        <h2 className="technology-heading">MongoDB</h2>
      </div>
      <div className="technology">
        <img src="img/postgres.png" alt="postgres" />
        <h2 className="technology-heading">Postgres</h2>
      </div>
      <div className="technology">
        <img src="img/docker.png" alt="docker" />
        <h2 className="technology-heading">Docker</h2>
      </div>
    </div>
  </TechnologiesSection>
);

export default Technologies;
