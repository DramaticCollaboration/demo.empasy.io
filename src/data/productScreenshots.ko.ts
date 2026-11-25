import type { ProductVisualGuide } from './productScreenshots.types';

export const PRODUCT_VISUAL_GUIDES_KO: Record<string, ProductVisualGuide> = {
  "sync-verse": {
    "productId": "sync-verse",
    "roleEasyLabel": "협업 및 승인 통합 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-verse.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "전체 작업 흐름 확인",
        "tip": "연결된 모듈 상태와 최근 처리된 작업 내역을 한눈에 살펴보세요."
      },
      {
        "step": 2,
        "menuPath": "작업 승인",
        "title": "변경 전후 비교 및 승인",
        "tip": "대기 중인 항목을 열어 변경 전후 내용을 비교하고 승인 또는 반려를 눌러 보세요."
      },
      {
        "step": 3,
        "menuPath": "품질 점검",
        "title": "통합 진단 리포트 확인",
        "tip": "배포 전 자동 점검된 품질·웹 진단 결과를 항목별로 확인할 수 있습니다."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "통합 현황판",
        "title": "업무 현황 및 승인 대기 대시보드",
        "route": "/dashboard/overview",
        "demoUrl": "https://verse-admin.empasy.io/dashboard/overview",
        "summary": "연결된 업무 모듈 상태와 최근 작업 이력, 승인 대기 건수를 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-verse/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "품질 검증 목록",
        "title": "테스트 및 품질 점검 진행 현황",
        "route": "/projects/task-list",
        "demoUrl": "https://verse-admin.empasy.io/projects/task-list",
        "summary": "요구사항별 테스트 항목과 검증 통과 현황을 작업 목록과 함께 추적합니다.",
        "rawUrl": "/images/screenshots/sync-verse/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "사이트·품질 점검",
        "title": "품질 · 웹 노출 통합 점검 리포트",
        "route": "/projects/site-audit",
        "demoUrl": "https://verse-admin.empasy.io/projects/site-audit",
        "summary": "배포 전 사전 품질 점검과 웹 접근성·검색 노출 진단 결과를 한 리포트로 모아 봅니다.",
        "rawUrl": "/images/screenshots/sync-verse/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "단계별 승인 센터",
        "title": "담당자 단계별 승인 및 이전 버전 복원",
        "route": "/governance/hitl-approval",
        "demoUrl": "https://verse-admin.empasy.io/governance/hitl-approval",
        "summary": "역할별 결재 순서에 따라 변경 전후 차이를 검토하고 승인하거나 이전 상태로 되돌립니다.",
        "rawUrl": "/images/screenshots/sync-verse/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-verse/screen_04.png"
      }
    ]
  },
  "sync-boot": {
    "productId": "sync-boot",
    "roleEasyLabel": "기업 업무 시스템 기반",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-boot.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "샘플 > 경영 실적 리포트",
        "title": "표준 리포트 화면 구성 보기",
        "tip": "기업 관리 시스템에서 바로 활용할 수 있는 지표 카드와 차트, 표 레이아웃을 확인해 보세요."
      },
      {
        "step": 2,
        "menuPath": "시스템 관리 > 사용자·권한",
        "title": "역할별 메뉴 권한 제어",
        "tip": "역할에 따라 메뉴와 버튼 노출이 어떻게 달라지는지 직접 설정해 보세요."
      },
      {
        "step": 3,
        "menuPath": "샘플 > 전자결재",
        "title": "기안 및 결재 흐름 체험",
        "tip": "결재선을 지정하고 승인·반려 이력이 기록되는 과정을 직접 눌러 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "운영 요약 리포트",
        "title": "부서별 예산·업무 실적 리포트 화면",
        "route": "/showcase/analytics-report",
        "demoUrl": "https://boot-admin.empasy.io/showcase/analytics-report",
        "summary": "핵심 지표 카드, 기간별 추이 차트, 부서별 상세 표가 결합된 표준 관리자 리포트 예시입니다.",
        "rawUrl": "/images/screenshots/sync-boot/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "조직·권한 관리",
        "title": "사용자·부서·역할별 권한 설정",
        "route": "/system/user",
        "demoUrl": "https://boot-admin.empasy.io/system/user",
        "summary": "조직도와 연동해 계정별 직무 역할과 접근 가능한 메뉴·버튼 권한을 한 화면에서 관리합니다.",
        "rawUrl": "/images/screenshots/sync-boot/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "전자결재",
        "title": "한국형 전자결재 기안 및 결재선 관리",
        "route": "/showcase/approval-wizard",
        "demoUrl": "https://boot-admin.empasy.io/showcase/approval-wizard",
        "summary": "품의·기안 양식 작성부터 다단계 결재선 지정, 실시간 진행 상태 확인까지 지원합니다.",
        "rawUrl": "/images/screenshots/sync-boot/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "작업 이력 조회",
        "title": "관리자 활동 및 보안 이력 조회",
        "route": "/monitor/log",
        "demoUrl": "https://boot-admin.empasy.io/monitor/log",
        "summary": "계정 로그인, 메뉴 접근, 주요 데이터 변경 이력을 시간순으로 조회하고 점검합니다.",
        "rawUrl": "/images/screenshots/sync-boot/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-boot/screen_04.png"
      }
    ]
  },
  "sync-cms": {
    "productId": "sync-cms",
    "roleEasyLabel": "웹사이트 및 다국어 콘텐츠 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-cms.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "콘텐츠 관리",
        "title": "원고 작성 및 승인 흐름 보기",
        "tip": "작성된 글의 검수 상태와 발행 승인 절차를 직접 확인해 보세요."
      },
      {
        "step": 2,
        "menuPath": "품질 점검",
        "title": "게시 전 검색·접근성 확인",
        "tip": "검색 노출에 필요한 기본 항목과 누락 요소를 점검 결과 화면에서 살펴보세요."
      },
      {
        "step": 3,
        "menuPath": "다국어 관리",
        "title": "용어집 기준 번역 관리",
        "tip": "국문 원고가 다국어 페이지로 어떻게 연결·관리되는지 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "통합 현황판",
        "title": "멀티사이트 콘텐츠 및 발행 현황",
        "route": "/dashboard/analysis",
        "demoUrl": "https://cms-admin.empasy.io/dashboard/analysis",
        "summary": "운영 중인 여러 사이트의 발행 건수, 검수 대기 원고, 방문 추이를 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-cms/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "콘텐츠 에디터",
        "title": "원고 작성 및 승인·버전 관리",
        "route": "/cms/content",
        "demoUrl": "https://cms-admin.empasy.io/cms/content",
        "summary": "에디터에서 글을 작성하고 검수 요청, 버전 비교, 예약 발행까지 순서대로 관리합니다.",
        "rawUrl": "/images/screenshots/sync-cms/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "검색·접근성 점검",
        "title": "게시 전 검색 노출 및 접근성 확인",
        "route": "/cms/ai/audit",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/audit",
        "summary": "제목·요약 문구, 이미지 대체 텍스트 등 놓치기 쉬운 웹 품질 항목을 게시 전에 점검합니다.",
        "rawUrl": "/images/screenshots/sync-cms/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "다국어 관리",
        "title": "브랜드 용어집 기반 다국어 현지화",
        "route": "/cms/ai/localization",
        "demoUrl": "https://cms-admin.empasy.io/cms/ai/localization",
        "summary": "고유 제품명과 전문 표현의 일관성을 유지하면서 다국어 페이지 번역본을 관리합니다.",
        "rawUrl": "/images/screenshots/sync-cms/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-cms/screen_04.png"
      }
    ]
  },
  "sync-shop": {
    "productId": "sync-shop",
    "roleEasyLabel": "쇼핑몰 운영 및 가격 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-shop.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "매출 및 주문 현황 확인",
        "tip": "일별·주별 매출 추이와 배송 대기·반품 대기 건수를 살펴보세요."
      },
      {
        "step": 2,
        "menuPath": "상품 > 상품 목록",
        "title": "상품 정보 및 판매가 관리",
        "tip": "등록된 상품의 판매가, 재고, 판매 상태 변경 화면을 확인해 보세요."
      },
      {
        "step": 3,
        "menuPath": "프로모션 > 타임딜·쿠폰",
        "title": "할인 행사 운영 확인",
        "tip": "시간대별 특가 세일과 쿠폰 캠페인 설정 화면을 둘러보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "매출·주문 현황",
        "title": "쇼핑몰 매출·주문 통합 대시보드",
        "route": "/dashboard/analysis",
        "demoUrl": "https://shop-admin.empasy.io/dashboard/analysis",
        "summary": "일별·주별·월별 주문 금액과 건수, 배송 대기 및 반품·문의 현황을 한 화면에서 확인합니다.",
        "rawUrl": "/images/screenshots/sync-shop/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "상품·가격 관리",
        "title": "상품 카탈로그 및 판매가·재고 관리",
        "route": "/pms/product",
        "demoUrl": "https://shop-admin.empasy.io/pms/product",
        "summary": "스토어별 상품 목록, 판매가, 재고 수량, 판매 상태를 조회하고 가격을 안전하게 관리합니다.",
        "rawUrl": "/images/screenshots/sync-shop/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "주문·배송·클레임",
        "title": "주문 처리 및 반품·교환 관리",
        "route": "/oms/order",
        "demoUrl": "https://shop-admin.empasy.io/oms/order",
        "summary": "결제 완료 건의 출고 지시와 배송 상태, 취소·반품 요청을 한 화면에서 처리합니다.",
        "rawUrl": "/images/screenshots/sync-shop/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "타임딜·쿠폰",
        "title": "타임딜 및 쿠폰 프로모션 관리",
        "route": "/sms/flash",
        "demoUrl": "https://shop-admin.empasy.io/sms/flash",
        "summary": "기간 한정 특가 행사와 할인 쿠폰 일정을 등록하고 운영 상태를 관리합니다.",
        "rawUrl": "/images/screenshots/sync-shop/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-shop/screen_04.png"
      }
    ]
  },
  "sync-ops": {
    "productId": "sync-ops",
    "roleEasyLabel": "SI 프로젝트 및 손익 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-ops.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "경영 대시보드",
        "title": "전사 수주 및 손익 요약 확인",
        "tip": "진행 중인 프로젝트 전체의 매출과 이익 현황을 한눈에 살펴보세요."
      },
      {
        "step": 2,
        "menuPath": "프로젝트 손익 매트릭스",
        "title": "공수 초과 위험 프로젝트 확인",
        "tip": "계약 단가와 실제 투입 인건비 차이가 표시되는 신호등 표를 확인해 보세요."
      },
      {
        "step": 3,
        "menuPath": "인력 배정 간트",
        "title": "인력 투입 일정 한눈에 보기",
        "tip": "월별 인력 배정 현황과 철수 예정 일정을 간트 화면에서 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "경영 현황판",
        "title": "수주·매출·프로젝트 손익 대시보드",
        "route": "/executive/dashboard",
        "demoUrl": "https://ops-admin.empasy.io/executive/dashboard",
        "summary": "진행 중인 전체 프로젝트의 수주 규모, 매출 현황, 공헌이익 추이를 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-ops/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "프로젝트 손익표",
        "title": "계약 금액 대비 실투입 원가 손익 매트릭스",
        "route": "/executive/profit-matrix",
        "demoUrl": "https://ops-admin.empasy.io/executive/profit-matrix",
        "summary": "계획 공수와 실제 투입 원가를 프로젝트별로 비교해 수익성이 떨어지는 사업을 빠르게 찾습니다.",
        "rawUrl": "/images/screenshots/sync-ops/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "보증·하도급 기한",
        "title": "4대 보증보험 및 하도급 기한 관리",
        "route": "/contract/compliance-alerts",
        "demoUrl": "https://ops-admin.empasy.io/contract/compliance-alerts",
        "summary": "보증증권 만기 일정과 하도급 대금 지급 기한 등 필수 법정 일정을 알림과 함께 관리합니다.",
        "rawUrl": "/images/screenshots/sync-ops/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "인력 배정 일정",
        "title": "기술 등급 기반 인력 배정 및 가동률",
        "route": "/talent/assignment-gantt",
        "demoUrl": "https://ops-admin.empasy.io/talent/assignment-gantt",
        "summary": "인력별 투입 기간, 철수 예정일, 중복 투입 여부를 일정표 형태로 한눈에 파악합니다.",
        "rawUrl": "/images/screenshots/sync-ops/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-ops/screen_04.png"
      }
    ]
  },
  "sync-llm": {
    "productId": "sync-llm",
    "roleEasyLabel": "사내 AI 비용 및 보안 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-llm.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "모델별 사용량과 절감 지표 보기",
        "tip": "유사 질문 재활용 현황과 부서별 AI 사용량 추이를 살펴보세요."
      },
      {
        "step": 2,
        "menuPath": "AI 관리 > AI 서비스 연결",
        "title": "예비 모델 전환 순서 확인",
        "tip": "특정 AI 서비스에 오류가 생겼을 때 어떤 예비 모델로 이어지는지 설정을 확인해 보세요."
      },
      {
        "step": 3,
        "menuPath": "사용 이력 > 개인정보 가림",
        "title": "개인정보 가림 처리 이력 보기",
        "tip": "연락처나 민감정보가 전송 전에 비식별 처리된 실제 기록을 살펴보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "비용·사용량 현황",
        "title": "AI 사용량 및 유사 질문 재활용 대시보드",
        "route": "/dashboard/analysis",
        "demoUrl": "https://llm-admin.empasy.io/dashboard/analysis",
        "summary": "모델별 호출량, 사용량 추이, 유사 질문 재활용으로 아낀 비용 현황을 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-llm/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "멀티 모델·예비 연결",
        "title": "AI 서비스 연결 및 장애 우회 설정",
        "route": "/llm/providers",
        "demoUrl": "https://llm-admin.empasy.io/llm/providers",
        "summary": "여러 AI 서비스와 사내 전용 서버 AI의 연결 상태를 점검하고 장애 시 대체할 예비 순서를 지정합니다.",
        "rawUrl": "/images/screenshots/sync-llm/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "모델 분배·예산",
        "title": "모델 단가 및 분배 규칙 관리",
        "route": "/llm/models",
        "demoUrl": "https://llm-admin.empasy.io/llm/models",
        "summary": "작업 성격에 맞춰 적절한 모델이 선택되도록 분배 기준과 부서별 사용 한도를 설정합니다.",
        "rawUrl": "/images/screenshots/sync-llm/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "사용 이력·정보 가림",
        "title": "사용 이력 및 개인정보 가림 처리 기록",
        "route": "/llm/request-logs",
        "demoUrl": "https://llm-admin.empasy.io/llm/request-logs",
        "summary": "어떤 요청에서 개인정보가 자동 가림 처리되었는지 사용 이력으로 투명하게 확인합니다.",
        "rawUrl": "/images/screenshots/sync-llm/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-llm/screen_04.png"
      }
    ]
  },
  "sync-insight": {
    "productId": "sync-insight",
    "roleEasyLabel": "대화형 데이터 조회",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-insight.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "데이터 분석 > 대화형 조회",
        "title": "샘플 질문으로 표와 차트 확인",
        "tip": "제공된 예시 질문을 클릭하거나 직접 질문을 입력해 표와 차트가 만들어지는 과정을 확인하세요."
      },
      {
        "step": 2,
        "menuPath": "데이터 분석 > 분석 보고서",
        "title": "요약 분석 리포트 확인",
        "tip": "단순 수치를 넘어 변동 요인을 정리해 주는 보고서 화면을 살펴보세요."
      },
      {
        "step": 3,
        "menuPath": "데이터 분석 > 출처 흐름",
        "title": "데이터 출처 지도 탐색",
        "tip": "지표가 어떤 업무 데이터에서 연결되어 나오는지 관계도를 눌러 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "요약 리포트 분석",
        "title": "지표 변동 원인 정리 및 요약 리포트",
        "route": "/analytics/research",
        "demoUrl": "https://verse-admin.empasy.io/analytics/research",
        "summary": "내부 운영 수치와 참고 자료를 함께 살펴보고 보고용 요약 문서를 정리합니다.",
        "rawUrl": "/images/screenshots/sync-insight/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_02.png"
      },
      {
        "idx": 2,
        "tabLabel": "말로 묻는 데이터 조회",
        "title": "한국어 질문 기반 조회 및 차트 시각화",
        "route": "/analytics/nl2sql",
        "demoUrl": "https://verse-admin.empasy.io/analytics/nl2sql",
        "summary": "전문 검색식 없이 일상 한국어로 질문하면 조회 결과를 표와 차트로 보여 주고, 실제 조회 조건도 함께 확인합니다.",
        "rawUrl": "/images/screenshots/sync-insight/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_01.png"
      },
      {
        "idx": 3,
        "tabLabel": "연결 데이터 관리",
        "title": "여러 업무 데이터 연결 및 상태 확인",
        "route": "/analytics/datasources",
        "demoUrl": "https://verse-admin.empasy.io/analytics/datasources",
        "summary": "연결된 여러 사내 업무 데이터의 상태와 조회 허용 범위를 한 화면에서 관리합니다.",
        "rawUrl": "/images/screenshots/sync-insight/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "데이터 출처 흐름",
        "title": "지표별 원본 데이터 출처 지도",
        "route": "/search/lineage",
        "demoUrl": "https://verse-admin.empasy.io/search/lineage",
        "summary": "특정 지표가 어떤 원본 업무 데이터와 항목을 거쳐 계산되었는지 시각적으로 확인합니다.",
        "rawUrl": "/images/screenshots/sync-insight/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-insight/screen_04.png"
      }
    ]
  },
  "sync-crawl": {
    "productId": "sync-crawl",
    "roleEasyLabel": "웹 데이터 자동 수집",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-crawl.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "수집 성공률과 처리량 확인",
        "tip": "사이트별 수집 상태와 최근 적재된 데이터 추이를 확인해 보세요."
      },
      {
        "step": 2,
        "menuPath": "수집 설계 > 수집 사이트",
        "title": "대상 사이트와 주기 설정 보기",
        "tip": "코딩 없이 수집 주소와 추출 항목이 어떻게 등록되는지 살펴보세요."
      },
      {
        "step": 3,
        "menuPath": "수집 결과 > 수집 문서",
        "title": "정리된 결과 데이터 확인",
        "tip": "원문에서 광고가 빠지고 정형 항목으로 정리된 결과를 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "수집 사이트 설정",
        "title": "수집 대상 주소 및 스케줄 관리",
        "route": "/crawl/source",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/source",
        "summary": "대상 웹사이트 주소, 수집 주기, 추출 항목과 변경 대응 옵션을 관리 화면에서 설정합니다.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_02.png?v=20261120"
      },
      {
        "idx": 2,
        "tabLabel": "정리된 데이터 조회",
        "title": "정규화 및 비식별화 완료 문서 조회",
        "route": "/crawl/document",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/document",
        "summary": "불필요한 요소가 제거되고 정형 항목으로 정리된 수집 결과를 검색·확인합니다.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_03.png?v=20261120"
      },
      {
        "idx": 3,
        "tabLabel": "안전 수집 정책",
        "title": "속도 제한 및 수집 안전 규칙 관리",
        "route": "/crawl/compliance",
        "demoUrl": "https://crawl-admin.empasy.io/crawl/compliance",
        "summary": "요청 간격 제한과 웹사이트 수집 허용 기준 준수 상태를 관리해 안정적으로 데이터를 수집합니다.",
        "rawUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120",
        "annotatedUrl": "/images/screenshots/sync-crawl/screen_04.png?v=20261120"
      }
    ]
  },
  "sync-eta": {
    "productId": "sync-eta",
    "roleEasyLabel": "웹 화면 테스트 자동화 · 사이트 결함 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-eta.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "레코더 · 엑셀 변환",
        "title": "클릭 녹화 또는 엑셀 업로드로 빠른 시나리오 구성",
        "tip": "운영 사이트 URL을 입력해 동작을 녹화하거나 기존 엑셀 시험표와 표본 주소를 올려 바로 실행해 보세요."
      },
      {
        "step": 2,
        "menuPath": "스튜디오 · 전수 검사",
        "title": "한 줄 문장으로 하위 링크와 글자 겹침 진단",
        "tip": "시나리오 없이도 링크 전수 검사와 디자인 결함 진단을 실행해 404·글자 겹침·[확인 필요] 분류를 확인해 보세요."
      },
      {
        "step": 3,
        "menuPath": "버그 칸반 보드",
        "title": "자동 발권 티켓 확인 및 [지금 확인] 원클릭 재검증",
        "tip": "검출된 문제 화면이 첨부된 티켓에서 [지금 확인] 버튼 하나로 해당 결함만 즉시 재검증하는 흐름을 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "프로젝트 대시보드",
        "title": "프로젝트 대시보드 · 성공률 추이 및 SSL 인증서 현황",
        "route": "/eta/screen-01",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "테스트 횟수·성공률 추이·실패 원인 비율·활성 스케줄과 운영 사이트 SSL 인증서 만료 일수를 한 화면에서 확인하고 원클릭 레포트를 생성합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "브라우저 동작 레코더",
        "title": "화면 1 · 브라우저 동작 레코더 및 실시간 DOM 검증",
        "route": "/eta/screen-02",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "클릭·입력·스크롤 동작을 실시간 기록해 재사용 블록으로 저장하며, 보안 가상 키패드·글로벌 쿠키 동의 배너·개인정보 마스킹을 자동 처리합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "엑셀 · 문장 변환",
        "title": "화면 2 · 엑셀 시험표 및 한 줄 문장 테스트 변환",
        "route": "/eta/screen-03",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "기존 엑셀·CSV 테스트 문서를 업로드해 행별로 선택 변환하고, 대표·표본 URL 설정과 사전 실행으로 여러 페이지에 공통 적용합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "멀티 계정 테스트",
        "title": "화면 3 · 멀티 계정 동시 테스트 및 녹화 영상 비교",
        "route": "/eta/screen-04",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "문의자(탭 0)와 관리자(탭 1)처럼 서로 다른 계정을 독립 세션으로 동시에 실행해 역할 간 상호작용과 단계별 녹화 영상을 한 번에 검증합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_04.png"
      },
      {
        "idx": 5,
        "tabLabel": "링크 · 화면 결함 진단",
        "title": "화면 4 · 사이트 지식그래프 링크 전수 검사 및 디자인 결함 감지",
        "route": "/eta/screen-05",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "시나리오 없이도 페이지 내 모든 하위 링크(404·의미 불일치)와 글자 겹침·빈 영역 결함을 자동 탐지하고 애매한 항목은 [확인 필요]로 분리합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_05.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_05.png"
      },
      {
        "idx": 6,
        "tabLabel": "버그 칸반 · 재검증",
        "title": "화면 5 · 버그 칸반 보드 및 [지금 확인] 원클릭 재검증",
        "route": "/eta/screen-06",
        "demoUrl": "https://empasy.io/ko/download_eta.html",
        "summary": "문제 사진이 첨부된 결함 티켓을 백로그→아직 있음→해결됨→종료로 관리하며, 중복 차단·[버그가 아닙니다] 기억·원클릭 재검증을 제공합니다.",
        "rawUrl": "/images/screenshots/sync-eta/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-eta/screen_06.png"
      }
    ]
  },
  "sync-apim": {
    "productId": "sync-apim",
    "roleEasyLabel": "외부 연동 현황 파악 및 보안 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-apim.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "외부 연동 호출 및 탐지 현황 보기",
        "tip": "관리 대상 연동 경로 현황과 최근 탐지된 비정상 접근 유형을 확인해 보세요."
      },
      {
        "step": 2,
        "menuPath": "연동 목록",
        "title": "관리 누락 연동 경로 식별 결과 확인",
        "tip": "문서에 빠져 있던 숨은 연동 구간이 어떻게 분류되어 표시되는지 살펴보세요."
      },
      {
        "step": 3,
        "menuPath": "위협 탐지 이력",
        "title": "비정상 공격 시도 상세 내역 보기",
        "tip": "의심 요청의 상세 정보와 차단·가림 정책 설정 화면을 확인해 보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "외부 연동 보안 현황판",
        "title": "보호 대상 서버 및 위협 탐지 대시보드",
        "route": "/dashboard/analysis",
        "demoUrl": "https://apim-admin.empasy.io/dashboard/analysis",
        "summary": "관리 중인 서버, 활성 연동 경로 수, 최근 탐지·차단된 비정상 접근 추이를 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-apim/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "관리 누락 연동 탐색",
        "title": "전체 연동 목록 자동 수집 및 숨은 연동 구간 확인",
        "route": "/apim/endpoints",
        "demoUrl": "https://apim-admin.empasy.io/apim/endpoints",
        "summary": "실제 통신 기록에서 발견된 전체 연동 목록과 관리 누락 연동 경로를 한 화면에서 점검합니다.",
        "rawUrl": "/images/screenshots/sync-apim/screen_02.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_02.png"
      },
      {
        "idx": 3,
        "tabLabel": "연동 규격 점검",
        "title": "표준 연동 규격서 대비 불일치 점검",
        "route": "/apim/openapi-specs",
        "demoUrl": "https://apim-admin.empasy.io/apim/openapi-specs",
        "summary": "문서에 정의된 형식과 실제 운영 응답의 차이를 비교해 누락되거나 초과 노출된 항목을 확인합니다.",
        "rawUrl": "/images/screenshots/sync-apim/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_03.png"
      },
      {
        "idx": 4,
        "tabLabel": "탐지 이벤트 상세",
        "title": "비정상 공격 시도 상세 확인 및 정책 적용",
        "route": "/apim/detect-events",
        "demoUrl": "https://apim-admin.empasy.io/apim/detect-events",
        "summary": "탐지된 비정상 공격 시도의 상세 내용을 조회하고 민감정보 가림 및 차단 정책을 관리합니다.",
        "rawUrl": "/images/screenshots/sync-apim/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-apim/screen_04.png"
      }
    ]
  },
  "sync-watch": {
    "productId": "sync-watch",
    "roleEasyLabel": "보안 취약점 수집 및 점검 규칙 관리",
    "standaloneHomepagePath": "https://empasy.io/ko/solutions/sync-watch.html",
    "quickTryPoints": [
      {
        "step": 1,
        "menuPath": "대시보드",
        "title": "최근 보안 이슈 현황 확인",
        "tip": "위험도별 취약점 건수와 규칙 반영 상태를 한눈에 확인해 보세요."
      },
      {
        "step": 2,
        "menuPath": "보안 이슈 원장",
        "title": "취약점 상세 내용 살펴보기",
        "tip": "수집된 보안 경보가 어떻게 한글 요약과 영향 범위로 정리되는지 확인해 보세요."
      },
      {
        "step": 3,
        "menuPath": "배포 · 조치 이력",
        "title": "규칙 반영 기록 확인",
        "tip": "각 보안 규칙이 검증을 거쳐 반영된 전체 이력을 살펴보세요."
      }
    ],
    "screenshots": [
      {
        "idx": 1,
        "tabLabel": "보안 관측 대시보드",
        "title": "신규 취약점 수집 및 대응 현황판",
        "route": "/dashboard/analysis",
        "demoUrl": "https://watch-admin.empasy.io/dashboard/analysis",
        "summary": "최근 수집된 보안 이슈 건수, 위험도 분포, 규칙 반영 현황을 한눈에 확인합니다.",
        "rawUrl": "/images/screenshots/sync-watch/screen_01.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_01.png"
      },
      {
        "idx": 2,
        "tabLabel": "보안 이슈 목록",
        "title": "수집된 취약점 원장 및 상세 확인",
        "route": "/watch/advisories",
        "demoUrl": "https://watch-admin.empasy.io/watch/advisories",
        "summary": "국내외 공식 보안 경보 채널에서 수집·정리된 취약점 목록과 영향 대상, 권고 조치를 상세 조회합니다.",
        "rawUrl": "/images/screenshots/sync-watch/screen_03.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_03.png"
      },
      {
        "idx": 3,
        "tabLabel": "점검 규칙 관리",
        "title": "사전 점검 및 외부 연동 방어 규칙 관리",
        "route": "/watch/verse-rules",
        "demoUrl": "https://watch-admin.empasy.io/watch/verse-rules",
        "summary": "취약점별로 생성된 점검 규칙의 사전 검증 결과와 활성화 상태를 관리합니다.",
        "rawUrl": "/images/screenshots/sync-watch/screen_04.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_04.png"
      },
      {
        "idx": 4,
        "tabLabel": "배포·조치 이력",
        "title": "규칙 반영 및 보안 조치 이력",
        "route": "/watch/dispatches",
        "demoUrl": "https://watch-admin.empasy.io/watch/dispatches",
        "summary": "어떤 취약점 규칙이 언제 어느 시스템에 반영되었는지 전체 조치 내역을 추적합니다.",
        "rawUrl": "/images/screenshots/sync-watch/screen_06.png",
        "annotatedUrl": "/images/screenshots/sync-watch/screen_06.png"
      }
    ]
  }
};
