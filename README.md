{팀 이름}
(팀 협업 문서 링크 게시)

팀원 구성
GURU
웨인 (개인 Github 링크)
제이든 (개인 Github 링크)
마크 (개인 Github 링크)
데이지 (개인 Github 링크)
제이 (개인 Github 링크)

프로젝트 소개
프로그래밍 교육 사이트의 백엔드 시스템 구축
프로젝트 기간: 2024.08.13 ~ 2024.09.03
기술 스택
Backend: Express.js, PrismaORM
Database: MongoDB
공통 Tool: Git & Github, Discord
팀원별 구현 기능 상세
웨인
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

소셜 로그인 API
구글 소셜 로그인 API를 활용하여 소셜 로그인 기능을 구현
로그인 후 추가 정보 입력을 위한 API 엔드포인트 개발
회원 추가 정보 입력 API
회원 유형(관리자, 학생)에 따른 조건부 입력 처리 API 구현
제이든
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

회원별 권한 관리
사용자의 역할에 따라 권한을 설정하는 API 구현
관리자 페이지와 일반 사용자 페이지를 위한 조건부 라우팅 기능 개발
반응형 레이아웃 API
클라이언트에서 전달된 요청에 맞춰 반응형 레이아웃을 위한 API 엔드포인트 구현
마크
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

수강생 정보 관리 API
fetch(GET)을 사용하여 학생의 수강 정보를 조회하는 API 엔드포인트 개발
수강 정보의 반응형 UI 구성
공용 Button API
공통으로 사용할 버튼 기능을 처리하는 API 구현
데이지
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

관리자 API
Path Parameter를 활용한 동적 라우팅 기능 구현
fetch(PATCH, DELETE)를 사용하여 학생 정보를 수정하고 탈퇴하는 API 엔드포인트 개발
CRUD 기능
학생 정보 CRUD 기능을 제공하는 API 구현
회원관리 슬라이더
학생별 정보 목록을 carousel 방식으로 보여주는 API 개발
제이
(자신이 개발한 기능에 대한 사진이나 gif 파일 첨부)

학생 시간 정보 관리 API
학생별 시간 정보를 조회하는 API 구현
fetch(GET)을 통해 실시간 접속 현황을 관리
수정 및 탈퇴 API
fetch(PATCH, DELETE)을 사용하여 수강생의 개인정보 수정 및 탈퇴 처리
공용 Modal API
공통 Modal 컴포넌트를 처리하는 API 구현
파일 구조
src
 ┣ config
 ┃ ┗ db.ts
 ┣ controllers
 ┃ ┣ auth.controller.ts
 ┃ ┗ user.controller.ts
 ┣ middleware
 ┃ ┣ auth.middleware.ts
 ┃ ┗ error.middleware.ts
 ┣ models
 ┃ ┣ user.model.ts
 ┃ ┗ course.model.ts
 ┣ routes
 ┃ ┣ auth.routes.ts
 ┃ ┗ user.routes.ts
 ┣ services
 ┃ ┣ auth.service.ts
 ┃ ┗ user.service.ts
 ┣ utils
 ┃ ┣ jwt.ts
 ┃ ┣ constants.ts
 ┃ ┗ logger.ts
 ┣ app.ts
 ┗ server.ts
prisma
 ┣ schema.prisma
 ┗ seed.ts
.env
.gitignore
package.json
tsconfig.json
README.md

구현 홈페이지
(개발한 홈페이지에 대한 링크 게시)

https://www.codeit.kr/

프로젝트 회고록
(제작한 발표자료 링크 혹은 첨부파일 첨부)
