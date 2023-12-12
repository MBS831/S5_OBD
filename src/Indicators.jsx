import styled from "styled-components";

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 50px;
  margin-left: 20px;
  margin-bottom: -55px;
`;

const Dot = styled.span`
  width: ${(props) => (props.active ? "16px" : "10px")};
  height: 10px;
  border-radius: ${(props) => (props.active ? "30%" : "50%")};
  background-color: ${(props) => (props.active ? "#222" : "#ddd")};
  margin: 0 5px;
  cursor: pointer;
`;

function Indicators({ currentStep, totalSteps, toStep }) {
  return (
    <IndicatorContainer>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <Dot
          key={index}
          active={index === currentStep}
          onClick={() => {
            toStep(index);
          }}
        />
      ))}
    </IndicatorContainer>
  );
}

export default Indicators;