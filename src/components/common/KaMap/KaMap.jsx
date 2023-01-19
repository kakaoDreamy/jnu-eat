// global kakao
import React, { useEffect } from 'react';
import building from '../../../data/building.json';
// import greenMarker from '../../../img/marker/markers_green.png';

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

    // eslint-disable-next-line no-use-before-define
    setMarker(map, 33.454705, 126.560767);

    // 여러개 마커 생성
    const positions = [];
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < building.length; x++) {
      const lat = building[x].building_lat;
      const lng = building[x].building_lng;

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      positions.push(markerPosition);
    }
    const imagesrc = require('../../../img/marker/markers_green.png');
    const markers = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(20, 20);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(0, 0),
        spriteSize: new kakao.maps.Size(20, 20),
      };

      // eslint-disable-next-line no-use-before-define
      const markerImage = createMarkerImage(imagesrc, imageSize, imageOptions);
      // eslint-disable-next-line no-use-before-define
      const marker = craeteMarker(positions[i], markerImage);

      markers.push(marker);
      // eslint-disable-next-line no-plusplus
      for (let o = 0; o < markers.length; o++) {
        markers[o].setMap(map);
      }
    }
  }, []);

  // 마커이미지의 주소, 크기, 옵션으로 마커 이미지 생성 리턴
  function createMarkerImage(imageSrc, size, options) {
    const markerImage = new kakao.maps.MarkerImage(imageSrc, size, options);
    return markerImage;
  }

  // 마커 객체 생성
  function craeteMarker(position, image) {
    const marker = new kakao.maps.Marker({
      position,
      image,
    });
    return marker;
  }

  // 맵에 마커 찍기
  // function setMarker(markers, markerPositions) {
  //   // eslint-disable-next-line no-plusplus
  //   for (let i = 0; i < markerPositions.length; i++) {
  //     const imageSize = new kakao.maps.ImageSize(22, 26);
  //     const imageOptions = {
  //       spriteOrigin: new kakao.maps.Point(10, 0),
  //       spriteSize: new kakao.maps.Size(36, 98),
  //     };

  //     const markerImage = createMarkerImage(greenMarker, imageSize, imageOptions);
  //     const marker = craeteMarker(markerPositions[i], markerImage);

  //     markers.push(marker);
  //   }
  // }

  // function setMarker(map, lat, lng)
  // parameter => map: 카카오맵 지도 객체, lat: 위도, lng: 경도
  // 지도 위에 해당 위도와 경도 위치에 맞게 마커 생성
  function setMarker(map, lat, lng) {
    const markerPosition = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
    return marker;
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
