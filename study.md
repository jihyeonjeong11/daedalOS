1. \\wsl.localhost\Ubuntu\home\wjd\dev\daedalOS\components\system\Files\FileManager\index.tsx

에서 바탕화면 icon을 표시함.

2. \\wsl.localhost\Ubuntu\home\wjd\dev\daedalOS\components\system\Files\FileEntry\index.tsx

에서 위 Filemanager 컴포넌트와 useDoubleclick을 사용함.

3. \\wsl.localhost\Ubuntu\home\wjd\dev\daedalOS\components\system\Files\FileEntry\useFile.ts

useDoubleCLick 이후, 같은 파일의 openFile 펑션 -> useFile hook -> useProcesses의 open 펑션으로 해서 창이 열리게 됨.

4. \\wsl.localhost\Ubuntu\home\wjd\dev\daedalOS\contexts\process\functions.ts

에서 open 안의 내용이 있다.
