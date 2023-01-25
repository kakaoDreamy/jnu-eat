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
    // setMarker(map, 33.454705, 126.560767);
    // eslint-disable-next-line no-use-before-define
    const foundOne = findBuilding('경상대학1호관');
    // eslint-disable-next-line no-use-before-define
    setMarker(map, 'heart', foundOne);
  }, []);

  function findBuilding(name) {
    // 건물 데이터 추출
    const tempData = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < building.length; i++) {
      if (building[i].name === name) {
        tempData.push({
          id: building[i].id,
          name: building[i].name,
          lat: building[i].lat,
          lng: building[i].lng,
        });
      }
    }
    return tempData;
  }

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
  // setMarker
  // 지도 객체, 마커색깔, 데이터
  // 데이터의 json 구조 => id, name, lat, lng
  function setMarker(map, color, data) {
    // 여러개 마커 생성
    const positions = [];
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < data.length; x++) {
      const { lat } = data[x];
      const { lng } = data[x];

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      positions.push(markerPosition);
    }
    // eslint-disable-next-line import/no-dynamic-require
    const imagesrc = require(`../../../img/marker/markers_${color}.png`);
    const markers = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < positions.length; i++) {
      const imageSize = new kakao.maps.Size(40, 50);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(0, 0),
        spriteSize: new kakao.maps.Size(40, 50),
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
  }

  // function setMarker(map, lat, lng)
  // parameter => map: 카카오맵 지도 객체, lat: 위도, lng: 경도
  // 지도 위에 해당 위도와 경도 위치에 맞게 마커 생성
  // function setMarker(map, lat, lng) {
  //   const markerPosition = new kakao.maps.LatLng(lat, lng);
  //   const marker = new kakao.maps.Marker({
  //     position: markerPosition,
  //   });
  //   marker.setMap(map);
  //   return marker;
  // }
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
