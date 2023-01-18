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
    // 지도 생성 및 출력
    const map = new kakao.maps.Map(container, options);

    const testMarker = setMarker();
  }, []);

  function setMarker() {
    const { map } = this;
    // 마커 출력
    const markerPosition = new kakao.maps.LatLng(33.454705, 126.560767);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    return marker.setMap(map);
  }

  return (
    <div
      id="map"
      style={{
        width: '100%',
        height: '98%',
      }}
    />
  );
}

export default KaMap;
