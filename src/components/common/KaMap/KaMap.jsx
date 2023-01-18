// global kakao
import React, { useEffect } from 'react';

const { kakao } = window;

function KaMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.454705, 126.560767),
      level: 4,
    };
    // eslint-disable-next-line no-unused-vars
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}

export default KaMap;
