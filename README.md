CSV 데이터 처리 웹 애플리케이션
개요
CSV 데이터 처리 웹 애플리케이션에 오신 것을 환영합니다! 이 도구는 사용자가 CSV 데이터를 웹 브라우저에서 직접 업로드, 보기, 전처리할 수 있도록 도와줍니다. PyScript를 통해 강력한 Pandas 라이브러리를 활용하여, 일반적으로 데스크탑이나 서버 환경에서만 가능한 강력한 데이터 처리 기능을 제공합니다.

주요 기능

1. CSV 파일 업로드
간단한 업로드 인터페이스: 사용자 친화적인 인터페이스를 통해 쉽게 CSV 파일을 업로드할 수 있습니다.
즉각적인 피드백: 업로드된 CSV 파일의 구조와 내용을 즉시 확인할 수 있습니다.
<!-- 2. 데이터 보기
   인터랙티브 데이터 테이블: 데이터를 인터랙티브 테이블 형식으로 보여주어 쉽게 탐색하고 검사할 수 있습니다.
   정렬 및 필터링: 테이블 내에서 데이터를 정렬하고 필터링할 수 있습니다. -->
2. 데이터 전처리
   Pandas 통합: 데이터 클리닝, 변환, 분석을 위한 Pandas의 모든 기능을 활용할 수 있습니다.
   사용자 정의 스크립트: 필요에 따라 데이터를 전처리하기 위한 사용자 정의 Python 스크립트를 작성하고 실행할 수 있습니다.
   요청 시 패키지 로딩: 필요할 때 필요한 Python 패키지를 동적으로 로딩하여 성능을 최적화합니다.
3. 성능 최적화
효율적인 로딩: HTML 파싱 시점이 아닌 CSV 파싱 시점에 패키지를 로딩하여 초기 로딩 시간을 단축하고 사용자 경험을 개선합니다.
최소화된 리소스 사용: 리소스 사용을 최소화하여 부드럽고 반응성이 좋은 인터페이스를 제공합니다.
https://github.com/thecode00/boinda/blob/07a38cda26be823d25a66ac2125ca281d771a396/src/wasm/main.py#L12
 <!-- 5. 데이터 내보내기
    처리된 데이터 저장: 전처리된 데이터를 CSV 형식으로 다시 내보내어 다른 애플리케이션이나 워크플로우에서 사용할 수 있습니다.
    다운로드 옵션: 전처리 후 데이터를 쉽게 다운로드할 수 있습니다.
    작동 방식
    CSV 파일 업로드: CSV 파일을 드래그 앤 드롭하거나 업로드 버튼을 사용하여 파일을 선택합니다.
    데이터 보기 및 검사: 업로드된 파일이 인터랙티브 테이블에 표시되며, 테이블 내에서 데이터를 정렬하고 필터링할 수 있습니다.
    데이터 전처리: 내장된 스크립트 에디터를 사용하여 Pandas를 이용한 Python 코드를 작성하고 실행하여 데이터를 전처리합니다.
    처리된 데이터 내보내기: 전처리가 완료되면 데이터를 CSV 파일로 내보낼 수 있습니다.
    시작하기
    사전 요구 사항
    최신 웹 브라우저(Chrome, Firefox, Edge 등)
    설치
    설치가 필요 없습니다! 웹 브라우저에서 애플리케이션을 열고 바로 CSV 데이터를 처리할 수 있습니다. -->

사용 방법
웹 브라우저에서 애플리케이션을 엽니다.
CSV 파일을 업로드합니다.
인터페이스를 사용하여 데이터를 보고 처리하고 내보냅니다.
예시 사용 사례
판매 데이터가 포함된 CSV 파일이 있다고 가정해보세요. 데이터에서 결측 값을 제거하고, 데이터 유형을 변환하고, 새로운 계산 열을 추가하고 싶습니다. 이 애플리케이션을 사용하면 CSV 파일을 업로드하고, Pandas를 이용한 몇 줄의 Python 코드를 작성하여 이러한 작업을 수행한 다음, 전처리된 데이터를 CSV 파일로 내보낼 수 있습니다.

기여
커뮤니티의 기여를 환영합니다. 새로운 기능이나 개선에 대한 제안이 있다면 GitHub 리포지토리에 이슈를 제기하거나 풀 리퀘스트를 제출해 주세요.

라이선스
이 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 LICENSE 파일을 참조해 주세요.

이 애플리케이션은 Python의 데이터 처리 라이브러리의 강력한 기능을 웹에 도입하여 데이터 과학자와 분석가에게 원활하고 효율적인 도구를 제공합니다.
