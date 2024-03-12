## Etoland 에 대하여
- php 5.3 백 프론트 모두 사용중
- ClodeFlare CDN, WAF
- nginx 리버스 프록시
- MySql 5.73
  - EUC-KR 인코딩


## BIG Single Table
[이토랜드-유머게시판](https://etoland.co.kr/bbs/board.php?bo_table=etohumor06)
- 위와 같은 여러개의 게시판이 존재하고, 게시판별로 별도의 테이블이 존재함.
- 엔진 업데이트시 **게시판 테이블을 모두 통합** 하는 것이 주요 목표.
  - 게시글
  - 댓글
  - 게시글 첨부 파일
  - 댓글 첨부 파일

 
## 데이터베이스 엔진 전환
- 테이블의 구조를 통합할 시에, 기존의 MySql 이 적합한 엔진인지?
- 아니면 새로운 데이터베이스 엔진을 도입하는게 더 나은 선택일지?


## 개발서버 // 테스트 디비 구축
- 개발 서버에서 디비에 대한 테스트
- 특히 UPDATE 또는 DELETE 에 대하여


## 엔진 업데이트 개요
[Excalidraw](https://excalidraw.com/#json=z1eVCun9qB7AZ7_lw7-Rd,44mNV3gafwj1gEQJcejdXQ)
