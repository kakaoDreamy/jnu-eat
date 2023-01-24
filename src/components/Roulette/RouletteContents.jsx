/* eslint-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { element } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Contents from '../common/Contents';
import Footer from '../common/Footer';

import RouletteBox from './RouletteBox';

function RouletteContents({ state, setState, nextStage, startSpin }) {
  const [theWheel, setTheWheel] = useState('');
  const [result, setResult] = useState('');
  const [onButton, setOnButton] = useState(false);
  useEffect(() => {
    setTheWheel(
      new Winwheel({
        numSegments: state.rouletteList.length, // Number of segments
        outerRadius: 180, // The size of the wheel.
        // centerX: 217, // Used to position on the background correctly.
        // centerY: 219,
        textFontSize: 28, // Font size.
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
  let wheelPower = 0;
  let wheelSpinning = false;

  // -------------------------------------------------------
  // Function to handle the onClick on the power buttons.
  // -------------------------------------------------------
  function powerSelected(powerLevel) {
    // Ensure that power can't be changed while wheel is spinning.
    if (wheelSpinning == false) {
      // Reset all to grey incase this is not the first time the user has selected the power.
      document.getElementById('pw1').className = '';
      document.getElementById('pw2').className = '';
      document.getElementById('pw3').className = '';

      // Now light up all cells below-and-including the one selected by changing the class.
      if (powerLevel >= 1) {
        document.getElementById('pw1').className = 'pw1';
      }

      if (powerLevel >= 2) {
        document.getElementById('pw2').className = 'pw2';
      }

      if (powerLevel >= 3) {
        document.getElementById('pw3').className = 'pw3';
      }

      // Set wheelPower var used when spin button is clicked.
      wheelPower = powerLevel;

      // Light up the spin button by changing it's source image and adding a clickable class to it.
      document.getElementById('spin_button').src = 'spin_on.png';
      document.getElementById('spin_button').className = 'clickable';
    }
  }

  // -------------------------------------------------------
  // Click handler for spin button.
  // -------------------------------------------------------
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
  }

  const changeHandler = () => {
    setOnButton(false);
    setState({
      ...state,
      rouletteList: state.rouletteList.filter(
        element => element.text !== state.rouletteResult.text,
      ),
    });
  };

  const resetRoulette = () => {
    if (state.rouletteList.length === 2) {
      setState({
        ...state,
        rouletteList: [],
        rouletteResult: state.rouletteList.map(element => {
          if (element === state.rouletteResult) {
          } else {
            return element;
          }
        }),
      });

      nextStage();
    } else {
      setState({
        ...state,
        rouletteList: [],
      });
      nextStage();
    }
  };

  function alertPrize(indicatedSegment) {
    // Do basic alert of the segment text.
    alert(`You have won ${indicatedSegment.text}`);
    setOnButton(true);
    setState({
      ...state,
      rouletteResult: {
        fillStyle: indicatedSegment.fillStyle,
        text: indicatedSegment.text,
      },
    });
  }

  return (
    <>
      <Contents>
        <div className="turnPage">
          <div className="turn">
            <onButton className="turnButton" onClick={startSpin}>
              <div className="turnText">돌려돌려 돌림판</div>
            </onButton>
          </div>
        </div>
        <canvas id="canvas" width="400" height="500">
          Canvas not supported, use another browser.
        </canvas>
      </Contents>
      <Footer>
        <RouletteBox
          onButton={onButton}
          startSpin={startSpin}
          state={state}
          changeHandler={changeHandler}
          resetRoulette={resetRoulette}
        />
      </Footer>
    </>
  );
}

export default RouletteContents;
