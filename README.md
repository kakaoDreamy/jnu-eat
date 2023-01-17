# 기획안

## 제주대학교 주변 음식점 추천

## 프로젝트 이름 : 제대로 먹젠!?

# 💬 프로젝트 설명

## 프로젝트 배경

도보를 자주 이용하는 제주대학교 학우들을 위한 점심 및 저녁 식당 추천

## 프로젝트 목적

시간이 없는 학생들을 위해 음식과 그에 맞는 음식점들을 추천해주고 시간을 효율적으로 관리 하기 위해 기획하게 되었습니다.

## 기획 핵심/내용

- 시간과 거리별로 식당 위치 마커로 표시
- 룰렛 기능
- 상단의 진행바를 통해 진행 과정 파악
- 마음에 들지 않는 결과는 제외시킨 후 다시 룰렛 진행

---

## ⚙️ 기능

1. **시작화면**
    1. 뭐 먹을지 결정하기 어려울 때는(부제) 사용
    2. 작은 사용설명 버튼 → 누르면 사용 설명 팝업창
    3. 시작하기 버튼 이름 → 추천받기(추후 변경 가능성 있음)
2. **지도 및 조건선택 화면**
    1. 기존 하단 레이어 창을 고정시키며 사용자가 버튼을 누를 수 있도록 유도
    2. 프로그레스 바를 사용하여 사용자의 진행 상태를 알려줌으로써 첫 사용자임에도 쉽게 사용할 수 있도록 유도
    3. 지도와 룰렛을 선택하며 접근하는 방법이 아니라 순서를 확실하게 정하고 버튼 1~2개 정도로 최소화하고 버튼이 눈에 띄기 쉬운 방식
    4. 마커 색깔 구분에 있어서는 데이터를 보고 결정 → 분류가 많을 시 마커 색깔 통일, 분류가 적을 시 마커 색깔 구분
3. **조건 선택 레이어창**
    1. 위치 선택, 소요 시간 2 행으로 하며, 소요 시간 부분에서 placeholder 기능 사용
    2. “음식을 못 골랐나요?” 버튼
    3. 조건 선택 시 → 룰렛 팝업창으로 이동
4. **룰렛 팝업창**
    1. 룰렛 시작 버튼은 룰렛 가운데
    2. 룰렛 돌리기 버튼('돌려돌려')
    3. 좋아요(다음), 별로에요(제외)버튼
    4. 좋아요, 별로에요 버튼은 룰렛이 돌아간 후에 뜨는 방식
        - 좋아요 선택 시 → 식당 추천 룰렛으로 이동
        - 별로에요 선택 시 → 해당 목록을 제외한 후 룰렛 재개
    5. 룰렛이 돌아가고 나서 멘트 추가
        - ex) “한식은 어떠신가요??” → 룰렛 밑에 위치
    6. 식당 추천 룰렛
        - 좋아요 선택 시 → 결과 화면으로 이동
        - 별로에요 선택 시 → 해당 목록을 제외한 후 룰렛 재개
5. **결과 화면**
    1. 식당 추천 룰렛에서 좋아요 누를 시 결과 화면 출력
    2. 결과 화면 내용
        1. 추천 식당명
        2. 카카오맵 버튼 클릭 시 해당 음식점 정보 제공
        3. 카카오톡 공유하기 버튼 클릭 시 음식점 공유 가능

---

## 💻 개발 환경

### **Front-end**
<div>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</br>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=black">
<img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=black">



</div>

### 협업툴
<div>
<img src="https://img.shields.io/badge/Agit-181717?style=for-the-badge&logo=Agit&logoColor=white">
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

<br>

---

## ✍️ 역할 분담

- 시작 페이지 - deutan
    - 사용방법 버튼, 추천받기 버튼
- 지도 페이지(api 기능) - eggsy
    - 지도 출력, 식당 마커, 조건에 따른 마커 표시, 사용자 위치 마커
- 룰렛 페이지 - hue
    - 룰렛 게임
- 하단 고정 레이어 - nov
    - 좋아요, 별로에요 버튼, 음식 추천해줘 버튼, 식당 추천해줘 버튼, 조건 입력 콤보박스(위치 건물, 소요 시간), 돌려돌려 돌림판 멘트
- 결과 페이지 - aiden
    - 식당 정보 링크 버튼, 친구와 공유 버튼(api 기능 - eggsy), 다시하기 버튼
- 타이틀 바 - nov, deutan
    - 타이틀, 프로그래스 상태 바, 뒤로가기 버튼 추가, 사용 설명 버튼
- 데이터 조회 - eggsy, hue
    - 식당 이름, 주소 분류
- 데이터 생성 - all
    - 정문 조사 - deutan, aiden / 후문 조사 - hue, nov, eggsy
- 페이지 통합 관리 - nov
    - 깃 머지 관리

---

## 📚 자료 조사

- 제주대 근처(정문,후문) 음식점 조사

---

## 🧑‍💻 개발 기간

- 시작 페이지 - deutan(1/25)
    - 사용 방법 버튼, 추천 받기 버튼
- 지도 페이지(api 기능) - eggsy(1/25)
    - 지도 출력, 식당 마커, 조건에 따른 마커 표시, 사용자 위치 마커)
- 룰렛 페이지 - hue(1/25)
    - 룰렛 게임
- 하단 고정 레이어 - nov(1/25)
    - 좋아요, 별로에요 버튼, 음식 추천해줘 버튼, 식당 추천해줘 버튼, 조건 입력 콤보박스(위치 건물, 소요 시간), 돌려돌려 돌림판 멘트
- 결과페이지 - aiden(1/25)
    - 식당 정보 링크 버튼, 친구와 공유 버튼(api 기능 - eggsy), 다시하기 버튼
- 타이틀 바 - nov, deutan(1/25)
    - 타이틀, 프로그레스 상태 바, 뒤로가기 버튼 추가, 사용설명 버튼
- 데이터 조회 - eggsy, hue(1/25)
    - 식당 이름, 주소, 분류
- 데이터 생성 - all(1/16)
