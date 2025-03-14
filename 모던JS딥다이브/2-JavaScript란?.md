# 2장 JavaScript 란?

JavaScript의 역사 부분에서 특히 흥미롭게 본 부분들 위주로...

## Ajax의 등장과 그 의미

1999년에 JS를 이용해서 서버와 클라이언트(브라우저)가 비동기적 통신할 수 있는 `Ajax`가 `XMLHttpRequest`라는 이름으로 등장함.

`Ajax`이전의 웹은 어떻게 처리되었을까? -> 전체 HTML을 받아와서 보여주고, 화면이 변경되면 다시 또 전체 HTML을 받아서 보여주는 식으로 동작함. 즉 변경되지 않는 부분까지 죄다 다시 그려서 효율적이지 않았다.(서버는 굳이 다시 다 그려야하고, 클라이언트는 변경되지 않은 부분도 다시 다 렌더링 프로세스를 거쳐야 하고.. 그 과정에서 불필요한 네트워크 통신 발생까지..)

`Ajax`의 등장은 일종의 패러다임 전환. 더이상 전체 HTML을 다시 받을 필요 없이 필요한 데이터만 가져와서 변경해야되는 부분만 다시 렌더링하는 방법이 가능해진 것. (어떻게 보면 이 기술이 지금의 React와 같은 CSR라이브러리까지 이어진 것이라고 볼 수 있겠군.) 현대 프론트엔드 개발의 근간이며, Ajax를 더 발전시켜서 컴포넌트 기반 아키텍처와 가상 DOM을 통한 더욱 효율적인 업데이트 개념으로 발전함.

## V8엔진의 등장과 그 의미

`Ajax`로 비동기 통신이 가능해짐 -> 구글 맵스 같은 매끄럽게 동작하는 웹사이트 등장 -> JS로 웹어플리케이션을 만들고자 하는 시도 증가 -> needs for a faster JS engine arises -> 2008년 V8 등장.

V8은 빨랐고, 브라우저에서 다양한 사용자 경험을 제공해주는 기반이 되었음. 그리고 이는 과거 서버에서 수행되던 로직들이 클라이언트로 많이 옮겨오는 계기가 되어 프론트엔드 영역 분리에 영향을 주었다.

## SPA가 등장하게 된 배경

Ajax, jQuery, V8 같은 기술들과 함께 웹 어플리케이션 복잡도가 기하급수적으로 증가했고, 이를 해결하기 위해서 다양한 패턴이나 라이브러리들이 등장했음. -> 개발 자체에 도움은 되었으나 변경과 확장이 용이한 앱 아키텍처 구축은 여전히 어려운 일이었음. -> 보다 견고한 아키텍처에 대한 필요성을 기반으로 CBD방법론을 기반으로 하는 SPA가 등장했고, 여전히 가장 많이 사용되는 웹 기술로 존재함.

## ECMAScript는 뭐고 JS는 뭐야?

ECMAScript는 표준 사양 명세서(ECMA-262)로, 그냥 JavaScript 는 이런 특성을 가진 언어야 같은 문서라고 보면 되는 듯. 브라우저 제조사들은 이 ECMAScript문서를 기반으로 JS를 구동하는 엔진을 구현함.

## JS는 멀티패러다임 언어

명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 전부 지원하는 `멀티 패러다임 언어`라는 점.

최근에 내 기억이 맞으면 함수형 프로그래밍으로 유명한 개발자인 유인동 님이 멀티패러다임을 잘 적용해서 문제를 해결하는 것의 중요성을 강조하셨던 걸로 기억하는데 맞는지 모르겠다...(확인 필요)

이와 관련해서는 다음 글을 한 번 읽어봐야겠다.

[Multi-Paradigm Languages](https://www.oreilly.com/radar/multi-paradigm-languages/)
