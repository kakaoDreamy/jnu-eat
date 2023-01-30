/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Contents from '../common/Contents';
import Footer from '../common/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import RouletteBox from './RouletteBox';
import styled from 'styled-components';
import '../Roulette/RouletteBox.css';

const RouletteStyle = styled.canvas`
  width: '880';
  height: '500';
  position: relative;
  z-index: 1;
`;
const SpinButton = styled.button`
  position: relative;
  z-index: 2;
  top: -50%;
  border-radius: 50%;
`;

function RouletteContents({ state, setState, nextStage }) {
  const wheelPower = 0;
  let wheelSpinning = false;
  const [result, setResult] = useState('');
  const [theWheel, setTheWheel] = useState('');
  const [onButton, setOnButton] = useState(false);

  useEffect(() => {
    if (state.rouletteList.length === 1) {
      setState({
        ...state,
        curStage: state.curStage + 1,
        rouletteList: [],
        rouletteResult: state.rouletteList[0],
      });
    }
  }, []);

  useEffect(() => {
    setTheWheel(
      new Winwheel({
        numSegments: state.rouletteList.length, // Number of segments
        outerRadius: 180, // The size of the wheel.
        // centerX: 217, // Used to position on the background correctly.
        // centerY: 219,
        textFontSize: 16, // Font size.
        // Definition of all the segments.
        segments: state.rouletteList,
        // Definition of the animation
        animation: {
          type: 'spinToStop',
          duration: 5,
          spins: 8,
          callbackFinished: alertPrize,
        },
      }),
    );
  }, [state.rouletteList]);

  function startSpin() {
    // Ensure that spinning can't be clicked again while already running.
    if (wheelSpinning == false) {
      // Based on the power level selected adjust the number of spins for the wheel, the more times is has
      // to rotate with the duration of the animation the quicker the wheel spins.
      if (wheelPower == 1) {
        theWheel.animation.spins = 3;
      } else if (wheelPower == 2) {
        theWheel.animation.spins = 8;
      } else if (wheelPower == 3) {
        theWheel.animation.spins = 15;
      }

      // Disable the spin button so can't click again while wheel is spinning.
      document.getElementById('spin_button').src = 'spin_off.png';
      document.getElementById('spin_button').className = '';

      // Begin the spin animation by calling startAnimation on the wheel object.
      theWheel.startAnimation();

      // Set to true so that power can't be changed and spin button re-enabled during
      // the current animation. The user will have to reset before spinning again.
      wheelSpinning = true;
    }
    // document.getElementsByClassName('resultText').style.visibility = 'visible';
  }

  function resultOn() {
    document.getElementsByClassName('resultText').style.visibility = 'visible';
  }

  const changeHandler = () => {
    setOnButton(false);

    if (state.rouletteList.length === 2) {
      setState({
        ...state,
        rouletteList: [],
        rouletteResult: state.rouletteList.filter(
          element => element.text !== state.rouletteResult.text,
        )[0],
      });
    } else {
      setState({
        ...state,
        rouletteList: state.rouletteList.filter(
          element => element.text !== state.rouletteResult.text,
        ),
      });
    }
  };

  const resetRoulette = () => {
    setState({
      ...state,
      rouletteList: [],
    });
    nextStage();
  };

  function alertPrize(indicatedSegment) {
    // Do basic alert of the segment text.
    // alert(`You have won ${indicatedSegment.text}`);
    // console.log(indicatedSegment.text);
    setOnButton(true);
    setState({
      ...state,
      rouletteResult: {
        fillStyle: indicatedSegment.fillStyle,
        text: indicatedSegment.text,
        url: indicatedSegment.url,
      },
    });
    setResult(indicatedSegment.text);
  }

  return (
    <>
      <Contents result={result}>
        <div className="turnPage">
          <canvas id="canvas" width="400" height="450"></canvas>

          <div className="resultText">"{result}" 어떠신가요?</div>
          <div
            className="turnButton"
            onClick={() => {
              startSpin();
              resultOn();
            }}
          >
            <div className="arrow">▲</div>
            <div className="turnText">돌려돌려 돌림판</div>
          </div>
        </div>
      </Contents>
      <Footer>
        <RouletteBox
          onButton={onButton}
          state={state}
          changeHandler={changeHandler}
          resetRoulette={resetRoulette}
        />
      </Footer>
    </>
  );
}

export default RouletteContents;
