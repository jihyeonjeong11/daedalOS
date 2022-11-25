https://www.youtube.com/watch?v=5flRlTEt5sI

OffscreenCanvas 와 Web worker 로 제대로 돌아가는 시간을 만드는 부분을 정리합니다.

https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

canvas 엘리먼트를 DOM 실행 프로세스에서 떨어뜨려 놓는 것이 목적.

로직은 web worker로 실행하여 역시 타이머 메인 쓰레드로부터 분리할 수 있다.

ntpjs도 사용함.

http://www.ntpjs.org/

서버 위치에 따라 맞는 시간을 보내줌.

스타일

window.devicePixelRatio 값으로 ratio값을 구함.
