/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
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
import restaurant from '../../data/restaurant.json';
// 식당 파일 임시로 생성해서 구현해봄
// restaurant파일에 식당 좌표들 추가되면 나중에 restaurant로 교체함
import { computeDistance } from '../../lib/Map/Distance';

const imagesrc = require('../../img/marker/markers_green.png');

const { kakao } = window;

const kakaoImg = require('../../img/kakao_icon.png');
const kakaoMapImg = require('../../img/kakaomap_icon.png');

const infoContents = (name, url) => {
  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init('cbad5fe6f61f1edbce0e854f9e36b16d');
      }

      kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '뭐 먹으러 가젠!?',
          description: '이거 먹으러 가자~',
          imageUrl: 'https://ifh.cc/g/oJpwDq.png',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: '카카오맵',
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', 'infoWindow');
  wrapper.setAttribute('style', 'width:100%; padding:10px; margin:9px');

  const res_name = document.createElement('div');
  res_name.setAttribute('class', 'resName');
  res_name.setAttribute('style', 'padding-bottom:6px');
  res_name.innerHTML = `${name} <br/>`;

  const shared = document.createElement('button');
  shared.setAttribute('class', 'share_btn');

  const info = document.createElement('button');
  info.setAttribute('class', 'shaare_btn');

  shared.addEventListener('click', kakaoButton);
  info.addEventListener('click', () => window.open(url));

  const sharedImage = document.createElement('img');
  sharedImage.setAttribute('class', 'kakao_img');
  sharedImage.setAttribute('src', kakaoImg);

  const infoImage = document.createElement('img');
  infoImage.setAttribute('class', 'kakao_img');
  infoImage.setAttribute('src', kakaoMapImg);

  shared.appendChild(sharedImage);
  info.appendChild(infoImage);

  wrapper.appendChild(res_name);

  wrapper.appendChild(shared);
  wrapper.appendChild(info);

  return wrapper;
};

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

// component 시작 ( MapContents )
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
    // console.log(dupArr);

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

  // useEffect start
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
    restaurant.forEach(element => {
      const lat = element.RES_LAT;
      const lng = element.RES_LNG;
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
      // console.log('first');
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
      // console.log(positions);
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
      // console.log('3단계', positions);
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
        // console.log(state.location, state.time);
      }

      const iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: infoContents(element.RES_NAME, element.RES_URL),
        removable: iwRemoveable,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, 'click', function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });

      const infoTitle = document.querySelectorAll('.infoWindow');

      infoTitle.forEach(function (e) {
        const w = e.offsetWidth + 10;
        const ml = w / 2;
        e.parentElement.style.top = '82px';
        e.parentElement.style.left = '50%';
        e.parentElement.style.marginLeft = `${-ml}px`;
        e.parentElement.style.width = `${w}px`;
        e.parentElement.previousSibling.style.display = 'none';
        e.parentElement.parentElement.style.border = '0px';
        e.parentElement.parentElement.style.background = 'unset';
      });

      // const iwContent = '<div style="padding:5px;">Hello World!</div>'; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    });
    // end of - position 안에 있는 마커들을 화면에 띄어줌

    // list를 상태에다가 갱신
    mapAndRouletteList(list);
    // end of - list를 상태에다가 갱신

    return () => {
      // console.log('unmount-MapContents.jsx');
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
