// global kakao
import React, { useEffect } from 'react';

const { kakao } = window;

function KaMap() {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.454705, 126.560767),
      level: 5,
    };
    // 지도 생성 및 출력
    // eslint-disable-next-line no-unused-vars
    const map = new kakao.maps.Map(container, options);

    // const markerPosition = new kakao.maps.LatLng(33.454705, 126.560767);
    // const marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(map);
    // eslint-disable-next-line no-use-before-define
    setMarker(map, 33.454705, 126.560767);
  }, []);

  // function setMarker(map, lat, lng)
  // parameter => map: 카카오맵 지도 객체, lat: 위도, lng: 경도
  // 지도 위에 해당 위도와 경도 위치에 맞게 마커 생성
  function setMarker(map, lat, lng) {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
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
