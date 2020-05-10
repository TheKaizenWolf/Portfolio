import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import {
  FaCommentDots,
  FaDesktop,
  FaMoneyBill,
  FaDev,
  FaCheckCircle,
  FaCoins,
} from 'react-icons/fa';

const StyledRow = styled.div.attrs({
  className:
    'bg-purple-800 px-1 mb-5 flex lg:flex-row flex-col justify center animatedFadeIn delay-1s rounded-lg',
})`
  display: grid;
  border-top: 5px solid #a463f2;
  border-bottom: 5px solid #a463f2;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: row;
  justify-items: center;
  @media (max-width: 75rem) {
    grid-template-columns: 1fr;
  }

  .row-container {
    ${tw`bg-white m-4 py-5 mb-3 text-center px-6 rounded-lg`}
    border: 5px solid #A463F2;
    .row-heading {
      ${tw`mb-0 text-white rounded-full py-1 mx-4`}
      background: #A463F2;
      font-family: 'Proxima Nova Black';
      font-size: 2rem;
      @media (max-width: 30rem) {
        font-size: 1.5rem;
      }
    }
    .row-icon {
      ${tw`mx-2 text-pink-600 align-middle inline-block text-4xl text-center mt-2 mb-4`}
    }
    .row-text {
      ${tw`text-xl px-2 text-gray-600 leading-tight`}
      font-family: 'Proxima Nova Black';
      .purple-link {
        ${tw`no-underline font-black`}
        color: #A463F2;
      }

      .red-link {
        ${tw`text-red-500 no-underline`}
      }
      .green-link {
        ${tw`text-green-500 no-underline`}
      }
    }
  }
`;

const Services = () => (
  <StyledRow>
    <div className="row-container">
      <h1 className="row-heading">Development</h1>
      <FaDesktop className="row-icon" />
      <FaDev className="row-icon" />
      <p className="row-text">
        I build software with a great focus on{' '}
        <a href="" className="purple-link">
          scalability
        </a>{' '}
        and <a className="purple-link">performance</a>. My skills will bring
        your project to the top.
      </p>
    </div>
    <div className="row-container">
      <h1 className="row-heading">UI & UX Design</h1>
      <FaCommentDots className="row-icon" />
      <FaCheckCircle className="row-icon" />
      <p className="row-text">
        Every project{' '}
        <a href="" className="purple-link">
          must
        </a>{' '}
        start with an amazing design. I will make sure my work
        <a className="purple-link"> represents </a>
        your business.
      </p>
    </div>
    <div className="row-container">
      <h1 className="row-heading">Pricing</h1>
      <FaMoneyBill className="row-icon" />
      <FaCoins className="row-icon" />
      <p className="row-text">
        <a className="light-purple no-underline">
          <a className="purple-link">I charge by value-based pricing. </a>
        </a>{' '}
        The services I provide are priced by the success I bring to your
        business.
      </p>
    </div>
  </StyledRow>
);

export default Services;
