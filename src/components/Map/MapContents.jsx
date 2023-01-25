/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
// eslint-disable-next-line no-use-before-define
// global kakao
import React, { useEffect } from 'react';
import Contents from '../common/Contents';
import SelectBox from '../Select/SelectBox';
import Footer from '../common/Footer';
import palette from '../../lib/palette';

import restaurantTemp from '../../data/restaurantTemp.json';
// 식당 파일 임시로 생성해서 구현해봄
import { computeDistance } from '../../lib/Map/Distance';

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

// component
function MapContents({ state, setState, nextStage }) {
  const locationHandler = e => {
    setState({ ...state, location: JSON.parse(e.target.value) });
  };

  const timeHandler = e => {
    setState({ ...state, time: e.target.value });
  };

  const eraseDupList = list => {
    const dupArr = list.map(element => {
      const result =
        state.curStage === 1
          ? element.RES_GB
          : { name: element.RES_NAME, url: element.RES_URL };

      return result;
    });
    console.log(dupArr);

    const set = new Set(dupArr);

    const uniqueArr = [...set];

    const result = uniqueArr.map((element, idx) => {
      if (state.curStage === 1) {
        return { fillStyle: palette[idx], text: element, url: '' };
      }

      return { fillStyle: palette[idx], text: element.name, url: element.url };
    });
    return result;
  };
  const mapAndRouletteList = list => {
    setState({
      ...state,
      map: list,
      rouletteList: eraseDupList(list),
    });
  };

  // start
  useEffect(() => {
    // 여러개 식당 마커 생성
    let positions = [];
    const list = [];
    const imageSize = new kakao.maps.Size(20, 20);
    const imageOptions = {
      spriteOrigin: new kakao.maps.Point(0, 0),
      spriteSize: new kakao.maps.Size(20, 20),
    };

    const markerImage = createMarkerImage(imagesrc, imageSize, imageOptions);
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

    // eslint-disable-next-line no-plusplus

    // 식당 건물 전체 불러와서 각각의 좌표, RES_GB값을 position 배열에다 저장
    restaurantTemp.forEach(element => {
      const lat = element.building_lat;
      const lng = element.building_lng;
      const GB = element.RES_GB;
      const NAME = element.RES_NAME;
      const URL = element.RES_URL;

      const markerPosition = new kakao.maps.LatLng(lat, lng);
      markerPosition.RES_GB = GB;
      markerPosition.RES_NAME = NAME;
      markerPosition.RES_URL = URL;
      positions.push(markerPosition);
    });

    // end of 식당 건물 전체 불러와서 각각의 좌표, RES_GB값을 position 배열에다 저장

    if (!state.time && !state.rouletteResult) {
      console.log('first');
    } else if (state.time && !state.rouletteResult) {
      // 조건에 맞는 마커들만 저장
      positions = positions.filter(element => {
        const dist = computeDistance(
          state.location.lat,
          state.location.lng,
          element.Ma,
          element.La,
        );

        return dist <= Number(state.time);
        // true 인 값만 반환
      });
      console.log(positions);
    } else {
      // 3단계
      positions = positions.filter(element => {
        const dist = computeDistance(
          state.location.lat,
          state.location.lng,
          element.Ma,
          element.La,
        );

        return (
          dist <= Number(state.time) &&
          element.RES_GB === state.rouletteResult.text
        );
        // true 인 값만 반환
      });
      console.log('3단계', positions);
    }

    // position 안에 있는 마커들을 화면에 띄어줌
    positions.forEach(element => {
      const marker = craeteMarker(element, markerImage);

      if (!state.time) {
        marker.setMap(map);

        list.push(marker);
      } else {
        marker.setMap(map);

        const food = marker.Rc;
        food.RES_GB = element.RES_GB;
        food.RES_NAME = element.RES_NAME;
        food.RES_URL = element.RES_URL;

        list.push(food);
        console.log(state.location, state.time);
      }
    });
    // end of - position 안에 있는 마커들을 화면에 띄어줌

    // list를 상태에다가 갱신
    mapAndRouletteList(list);
    // end of - list를 상태에다가 갱신

    return () => {
      console.log('unmount-MapContents.jsx');
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
