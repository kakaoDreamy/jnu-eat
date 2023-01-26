// global kakao
import React, { useEffect } from 'react';
import restaurant from '../../../data/restaurant.json';
// import Kakaomap from '../../KakaoMap';
import '../../../css/InfoWindow.css';

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
    const infoContent = [];

    const imagesrc = require('../../../img/marker/markers_blue.png');
    const markers = [];

    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < restaurant.length; x++) {
      const lat = restaurant[x].RES_LAT;
      const lng = restaurant[x].RES_LNG;
      const name = restaurant[x].RES_NAME;
      const address = restaurant[x].RES_ADDR;
      const url = restaurant[x].RES_URL;

      infoContent[x] = `<div class="customoverlay">
        <button class="close" onclick="" title="닫기"></button>
        <div class="customoverlayContent">
          <p>이름  :  ${name}</p>
          <p>주소  :  ${address}</p>
          <p>카카오맵  :  <a href="${url}">더보기</a></p>
        </div>
        <div class="customoverlayShare">
        
      </div>`;

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      positions.push(markerPosition);

      const imageSize = new kakao.maps.Size(20, 20);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(0, 0),
        spriteSize: new kakao.maps.Size(20, 20),
      };

      // eslint-disable-next-line no-use-before-define
      const markerImage = createMarkerImage(imagesrc, imageSize, imageOptions);
      // eslint-disable-next-line no-use-before-define
      const marker = craeteMarker(positions[x], markerImage);

      const iwContent = infoContent[x];
      const iwRemoveable = true;
      const customoverlay = new kakao.maps.CustomOverlay({
        position: marker.getPosition(),
        content: iwContent,
        removable: iwRemoveable,
      });

      markers.push(marker);
      // eslint-disable-next-line no-plusplus

      markers[x].setMap(map);

      // 마커에 클릭이벤트를 등록합니다
      // 마커 위에 인포윈도우를 표시합니다
      kakao.maps.event.addListener(marker, 'click', () => {
        customoverlay.setMap(map);
      });
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
      clickable: true,
    });
    return marker;
  }

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
