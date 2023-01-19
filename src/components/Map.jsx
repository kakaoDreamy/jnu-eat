import React from 'react';

function Map({ state }) {
  return (
    <>
      <div>{state.location}</div>
      <div>{state.time}</div>
      <div>
        {state.rouletteList ? (
          state.rouletteList.map(element => {
            return <div key={element.text}>{element.text}</div>;
          })
        ) : (
          <div />
        )}
      </div>
    </>
  );
}

export default Map;
