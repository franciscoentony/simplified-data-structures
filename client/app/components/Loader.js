import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader" style={{-animationspeed: '2s', -circlescount: 7}}>
        <div className="circle" style={{-color: '#240046', -index: 0}} />
        <div className="circle" style={{-color: '#3c096c', -index: 1}} />
        <div className="circle" style={{-color: '#5a189a', -index: 2}} />
        <div className="circle" style={{-color: '#7b2cbf', -index: 3}} />
        <div className="circle" style={{-color: '#9d4edd', -index: 4}} />
        <div className="circle" style={{-color: '#c77dff', -index: 5}} />
        <div className="circle" style={{-color: '#e0aaff', -index: 6}} />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: -webkit-box;
    display: flex;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 500px;
    perspective: 500px;
    -webkit-transform: rotatex(60deg);
    transform: rotatex(60deg);
    border-radius: 500px;
  }
  .loader .circle {
    --distance: 20px;
    --animationEase: ease-in-out;
    position: absolute;
    top: calc(var(--index) * var(--distance));
    bottom: calc(var(--index) * var(--distance));
    left: calc(var(--index) * var(--distance));
    right: calc(var(--index) * var(--distance));
    margin: auto;
    border: 20px solid var(--color);
    -webkit-animation: animate var(--animationSpeed) var(--animationEase) infinite;
    animation: animate var(--animationSpeed) var(--animationEase) infinite;
    -webkit-animation-delay: calc(
      var(--index) * (var(--animationSpeed) / var(--circlesCount))
    );
    animation-delay: calc(
      var(--index) * (var(--animationSpeed) / var(--circlesCount))
    );
    border-radius: 500px;
    box-shadow:
      0px 4px 4px var(--color),
      0px 4px 8px var(--color) inset,
      0px 4px 10px var(--color) inset;
  }

  @-webkit-keyframes animate {
    0%,
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    50% {
      -webkit-transform: translateZ(calc(var(--index) * var(--distance) * -1));
      transform: translateZ(calc(var(--index) * var(--distance) * -1));
    }
  }
  @keyframes animate {
    0%,
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
    50% {
      -webkit-transform: translateZ(calc(var(--index) * var(--distance) * -1));
      transform: translateZ(calc(var(--index) * var(--distance) * -1));
    }
  }`;

export default Loader;
