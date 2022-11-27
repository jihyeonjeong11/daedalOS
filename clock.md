https://www.youtube.com/watch?v=5flRlTEt5sI

OffscreenCanvas 와 Web worker 로 제대로 돌아가는 시간을 만드는 부분을 정리합니다.

https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas

canvas 엘리먼트를 DOM 실행 프로세스에서 떨어뜨려 놓는 것이 목적.

로직은 web worker로 실행하여 역시 타이머 메인 쓰레드로부터 분리할 수 있다.

ntpjs도 사용함.

http://www.ntpjs.org/

서버 위치에 따라 맞는 시간을 보내줌.

스타일

StyledClock.tsx를 참고
window.devicePixelRatio 값으로 ratio값을 구함.

index.tsx에서 

ref 항목에서 offscreenCanbas와 web worker와의 상호작영 로직이 들어있음.

136줄에서 테스팅하다보니 위 div안에 이상한것들이 들어가서(fast refresh의 버그인것으로)
지워주는 로직 만듬

그 아래 createOffScreenCanvas위치

createOfscreenCanvas 펑션

리액트 바깥에 위치하므로 appendChild한다.

98줄 clockSource가 바뀔 경우 리셋

하지만 바뀔 일이 없는데, 왜 필요한지는 잘 모르겟다고 함.

102, 픽셀레이시오 변경 시 보내주는 펑션 사이즈 변경


workerInit, useWorker

실제webworker 사용 로직,

워커에서 updateTime 사용함.

154줄 사용하는 이유는 서버사이드에서 워닝이 나오기 때문이라고 한다.

onclick은 이스터에그 이벤트


70줄 new worker

js파일과 meta.utl을 임포트한다(메타데이터) vite도 동일

ntp.ts 나중에 다룸



```
  const date = new Intl.DateTimeFormat(DEFAULT_LOCALE, dateFormat).format(now);
  
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  // 타임 로케일을 위한 네이티브 메소드,
  
```










