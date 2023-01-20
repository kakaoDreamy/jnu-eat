import React, { useEffect } from 'react';
import Contents from '../common/Contents';
import SelectBox from '../Select/SelectBox';
import Footer from '../common/Footer';
import palette from '../../lib/palette';
import building from '../../data/building.json';
// import greenMarker from '../../../img/marker/markers_green.png';
// global kakao
const imagesrc = require('../../img/marker/markers_green.png');

const { kakao } = window;
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

function setMarker(map, lat, lng) {
  const markerPosition = new kakao.maps.LatLng(lat, lng);
  const marker = new kakao.maps.Marker({
    position: markerPosition,
  });
  marker.setMap(map);
  return marker;
}

function MapContents({ state, setState, nextStage }) {
  const locationHandler = e => {
    setState({ ...state, location: JSON.parse(e.target.value) });
  };

  const timeHandler = e => {
    setState({ ...state, time: e.target.value });
  };

  const updateRoulette = () => {
    setState({
      ...state,
      rouletteList: [
        { fillStyle: palette[0], text: '한식' },
        { fillStyle: palette[1], text: '중식' },
        { fillStyle: palette[2], text: '일식' },
        { fillStyle: palette[3], text: '양식' },
      ],
    });
  };

  const mapAndRouletteList = list => {
    updateRoulette();
    setState({
      ...state,
      map: list,
    });
  };

  // start
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
    if (state.location) {
      setMarker(map, state.location.lat, state.location.lng);
    }

    // 여러개 마커 생성
    const positions = [];
    // eslint-disable-next-line no-plusplus
    for (let x = 0; x < building.length; x++) {
      const lat = building[x].building_lat;
      const lng = building[x].building_lng;

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      positions.push(markerPosition);
    }
    const list = [];
    let end;
    if (!state.time) {
      end = positions.length;
    } else {
      end = 10;
    }

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < end; i++) {
      const imageSize = new kakao.maps.Size(20, 20);
      const imageOptions = {
        spriteOrigin: new kakao.maps.Point(0, 0),
        spriteSize: new kakao.maps.Size(20, 20),
      };
      // eslint-disable-next-line no-use-before-define
      const markerImage = createMarkerImage(imagesrc, imageSize, imageOptions);
      // eslint-disable-next-line no-use-before-define
      const marker = craeteMarker(positions[i], markerImage);

      // eslint-disable-next-line no-plusplus

      if (!state.time) {
        marker.setMap(map);

        list.push(marker);
      } else {
        marker.setMap(map);
        list.push(marker.Rc);
        console.log(state.location, state.time);
      }
    }
    mapAndRouletteList(list);

    return () => {
      console.log('clean');
    };
  }, [state.location, state.time]);

  return (
    <>
      <Contents>
        <div
          id="map"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
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
