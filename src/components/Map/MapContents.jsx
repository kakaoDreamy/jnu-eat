import React, { useEffect } from 'react';
import Contents from '../common/Contents';
import Map from '../Map';
import SelectBox from '../Select/SelectBox';
import Footer from '../common/Footer';
import palette from '../../lib/palette';

function MapContents({ state, setState, nextStage }) {
  const locationHandler = e => {
    setState({ ...state, location: e.target.value });
  };

  const timeHandler = e => {
    setState({ ...state, time: e.target.value });
  };

  useEffect(() => {
    console.log(state.location);
    console.log(state.time);

    setState({
      ...state,
      rouletteList: [
        { fillStyle: palette[0], text: '한식' },
        { fillStyle: palette[1], text: '중식' },
        { fillStyle: palette[2], text: '일식' },
        { fillStyle: palette[3], text: '양식' },
      ],
    });
  }, [state.time]);
  return (
    <>
      <Contents>
        <Map state={state} />
      </Contents>
      <Footer>
        <SelectBox
          state={state}
          locationHandler={locationHandler}
          timeHandler={timeHandler}
          nextStage={nextStage}
        />
      </Footer>
    </>
  );
}

export default MapContents;
