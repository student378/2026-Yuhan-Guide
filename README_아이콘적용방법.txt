=== PWA 아이콘 파일 목록 ===

[ 깃허브 업로드 파일 ]
- favicon.ico         → 브라우저 탭 아이콘
- icon-72.png ~ icon-512.png → PWA/모바일 앱 아이콘
- manifest.json       → PWA 설정 파일 (기존 파일 교체)

[ index.html <head> 에 추가할 코드 ]
※ 기존 manifest, apple-touch-icon 링크가 있으면 교체

<link rel="icon" href="favicon.ico">
<link rel="apple-touch-icon" sizes="120x120" href="icon-120.png">
<link rel="apple-touch-icon" sizes="152x152" href="icon-152.png">
<link rel="apple-touch-icon" sizes="167x167" href="icon-167.png">
<link rel="apple-touch-icon" sizes="180x180" href="icon-180.png">

[ 깃허브 업로드 위치 ]
모든 파일을 index.html 과 같은 폴더(루트)에 업로드하세요.

[ 모바일 설치 방법 - 안드로이드 ]
Chrome → 우측 메뉴 → "홈 화면에 추가"

[ 모바일 설치 방법 - 아이폰 ]
Safari → 공유버튼(□↑) → "홈 화면에 추가"
