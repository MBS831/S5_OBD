import React from "react";
import { BsFillArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";
import Indicators from "./Indicators"; 
import styled, { keyframes } from "styled-components";

const fadeToRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const fadeToLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`;
const MoveToRightElement = styled.div`
  animation: ${fadeToRight} 1s ease 1 forwards;
`;

const MoveToLeftElement = styled.div`
  animation: ${fadeToLeft} 1s ease 1 forwards;
`;

function Card({
  title,
  content,
  nextStep,
  prevStep,
  image,
  bgColor,
  showPrevButton,
  showNextButton,
  currentStep,
  totalSteps,
  toStep,
  animateToLeft,
}) {
  const AnimationContainer = animateToLeft
    ? MoveToLeftElement
    : MoveToRightElement;

  return (
    <AnimationContainer>
      <div className="max-w-sm mx-auto rounded-3xl bg-white">
        <img className={bgColor} src={image} alt="" />
        <h1 className="text-lg font-bold m-5">{title}</h1>
        <p className="text-sm ms-5 pe-5">{content}</p>

        <Indicators
          currentStep={currentStep}
          totalSteps={totalSteps}
          toStep={toStep}
        />

        <div className="flex justify-end ">
          {showPrevButton && (
            <button className="py-10 me-3" onClick={prevStep}>
              <BsArrowLeftCircle size={40} />
            </button>
          )}
          {showNextButton && (
            <button className="py-10 me-2" onClick={nextStep}>
              <BsFillArrowRightCircleFill size={40} />
            </button>
          )}
        </div>
      </div>
    </AnimationContainer>
  );
}

export default Card;