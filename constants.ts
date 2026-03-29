import { Player, TeamHistory, RoutineItem, FloorInfo, Term } from './types';

export const TEAM_ASSETS = {
  logo: "https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/wep/logo.webp",
  uniformFront: "https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/wep/front.webp",
  uniformBack: "https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/wep/back.webp",
  stadium: "https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/stadium.png",
};

export const PLAYERS: Player[] = [
  {
    id: 'rift',
    role: 'TOP',
    name: 'Rift',
    realName: '최혁진 (Choi Hyeok-jin)',
    mbti: 'INTP-A',
    enneagram: '5w4 sp/sx',
    birth: '2001.04.07',
    appearance: '흑발, 흑안',
    height: '184cm',
    outfit: '회색 후드집업',
    personality: '과묵+쿨데레+또라이+승부욕+무관심한 듯 관심+직설적 말투',
    traits: ['적극적인 콜', '강한 라인전', '사이드 플레이', '안정적인 성장'],
    weaknesses: ['유리할 때 무리함', '라인전 몰두', '갱킹 잘 당함'],
    signatures: ['그웬', '잭스', '카밀'],
    contract: '25년 단년 계약 만료 → 26년 1년 재계약 완료',
    transferHistory: '이적 5회',
    features: [
      '루틴: 대회 시작 직전 쿠키 먹기',
      '인게임에선 말 많고 과격해지는 탑신병자',
      '인생에 게임, 밥, 잠이 전부',
      '분야 불문 하나에 깊게 빠짐',
      '어릴 적 밴드부 일렉 기타 담당',
      '달콤한 디저트 좋아함',
      '술은 강하지만 비선호',
      '연애 경험 없음'
    ],
    hobby: 'OTT 시청',
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/a/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/a/20.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/a/14.webp'
    ]
  },
  {
    id: 'ion',
    role: 'JGL',
    name: 'Ion',
    realName: '정이온 (Jung Ion)',
    mbti: 'INFJ-A',
    enneagram: '3w2 sx/so',
    birth: '2003.02.03',
    appearance: '남색머리, 회안, 안경, 오른쪽 귓볼 점',
    height: '179cm',
    outfit: '남색 후드티',
    personality: '계산적+통제욕+노력파+감정 절제+예민+속내 알 수 없음+은근한 배려',
    traits: ['서브 오더', '운영형', '허를 찌르는 동선', '자원 적게 먹음', '팀원 멘탈 케어'],
    weaknesses: ['큰 그림에 매몰', '낮은 캐리력', '가끔 치명적인 실수'],
    signatures: ['오공', '비에고', '신짜오'],
    contract: '25~26년 2년 계약',
    transferHistory: '이적 2회',
    features: [
      '좋아하는 분야는 깊게 분석',
      '향에 예민',
      '매운 음식 못 먹음',
      '커피 좋아함',
      '술 약함',
      '연애 경험 없음'
    ],
    hobby: '음악 감상(R&B, 재즈 위주), 음반 수집, 산책',
    pet: {
      type: '반려묘 (샴)',
      name: '앙코',
      age: '4살',
      description: '숙소에서 키우는 샴고양이'
    },
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/b/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/b/20.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/b/23.webp'
    ]
  },
  {
    id: '900',
    role: 'MID',
    name: '900',
    realName: '구백휘 (Gu Baek-hwi)',
    mbti: 'ISTP-T',
    enneagram: '9w8 sx/sp',
    birth: '2003.01.14',
    appearance: '적갈발, 흑안',
    height: '182cm',
    outfit: '검정 후드티',
    personality: '씨발데레+낯가림+승부욕+자존감/자존심 높음+오글거리는건 질색+냉소적 말투',
    traits: ['강한 라인전', '넓은 챔피언 폭', '교전/한타 지향', '근접 챔피언 선호', '강한 에고'],
    weaknesses: ['사이드 운영 비선호', '수동적 챔피언 비선호', '아쉬운 빅토르 숙련도'],
    signatures: ['아칼리', '탈리야', '요네'],
    contract: '24~25년 2년 계약 만료',
    transferHistory: '이적 0회',
    features: [
      'RG의 프랜차이즈 스타이자 성골유스로 자부심이 강함',
      '루틴: 경기 전 단장님과 악수',
      '팬들 앞에선 욕 자제',
      '팬들 위해 방송 열심히하며 정기 방송일 외에도 가끔 옴',
      '공포게임 싫어함',
      '술 약함',
      '당신이 유혹할 시 튕김',
      '연애 경험 없음'
    ],
    hobby: '게임',
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/c/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/c/21.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/c/15.webp'
    ]
  },
  {
    id: 'eclipse',
    role: 'BOT',
    name: 'Eclipse',
    realName: '서찬희 (Seo Chan-hee)',
    mbti: 'ESFP-T',
    enneagram: '6w7 sx/so',
    birth: '2005.09.27',
    appearance: '금발(염색), 흑안',
    height: '182cm',
    outfit: '검정 집업 져지',
    personality: '능글맞음+분위기 메이커+장난기 많음+관심사외 무관심+애정결핍',
    traits: ['공격적/과감', '기복 큰 주사위형', '높은 캐리력', '강한 라인전', '큰 경기에 강함'],
    weaknesses: ['자원 많이 먹음', '낮은 저점', '가끔 어이없는 데스'],
    signatures: ['루시안', '카이사', '이즈리얼'],
    contract: '24~25년 2년 계약 만료 → 27년까지 2년 재계약 완료',
    transferHistory: '이적 0회',
    features: [
      'RG의 성골유스',
      '팬서비스 적극적',
      '솔로랭크 항상 최상위권',
      '가끔 바보 같은 모습',
      '술 강하고 좋아함',
      '가벼운 연애 경험 2회'
    ],
    hobby: 'F1 경기 시청, 패션, SNS',
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/d/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/d/20.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/d/15.webp'
    ]
  },
  {
    id: 'zeep',
    role: 'SUP',
    name: 'zeep',
    realName: '안재호 (Ahn Jae-ho)',
    mbti: 'ESTJ-A',
    enneagram: '8w9 sp/so',
    birth: '2000.06.10',
    appearance: '갈발, 흑안, 큰 덩치',
    height: '190cm',
    outfit: '검정 티셔츠',
    personality: '여유로움+쾌활함+절제된 카리스마+든든함+부드럽지만 위압적인 말투',
    traits: ['메인 오더', '명확한 콜', '원딜 케어', '안정 지향', '탱/이니시 서폿 선호'],
    weaknesses: ['불리할 때 무력', '가끔 시야 장악 중 짤림', '아쉬운 스킬샷', '아쉬운 딜서폿 숙련도'],
    signatures: ['노틸러스', '알리스타', '브라움'],
    contract: '24~26년 3년 계약',
    transferHistory: '이적 3회',
    features: [
      '피드백 시 냉철/논리적',
      '팀원들 건강 챙겨줌',
      '게임은 롤 빼고 다 못함',
      '귀여운 존재 좋아함',
      '몸에 열 많음',
    ],
    hobby: '운동',
    pet: {
      type: '반려견 (푸들)',
      name: '베리',
      age: '8살',
      description: '본가에서 키우는 강아지'
    },
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/e/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/e/15.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/e/6.webp'
    ]
  },
  {
    id: 'gun',
    role: 'HEAD COACH',
    name: 'Gun',
    realName: '김 건 (Kim Gun)',
    mbti: 'ENFJ-T',
    enneagram: '3w4 so/sx',
    birth: '1993.10.31',
    appearance: '흑발, 흑안',
    height: '187cm',
    outfit: '흰 셔츠',
    personality: '진중+완벽해 보이는 허당+원칙주의+자상함+부드러운 카리스마+칭찬에 약함+위엄있는 말투',
    traits: ['메타 분석', '선수 육성', '설득력 있는 화술'],
    weaknesses: [],
    contract: '21년부터 재직, 25~27년 3년 재계약',
    pastExperience: '정글 프로 출신(12~15년), 타팀 코치/감독 경험(17~20년)',
    features: [
      '과묵해 보이지만 감독답게 말 많음',
      '명언 좋아함',
      '흐트러진 모습을 보이고 싶지 않아 함',
      '흡연자(끊고 싶음)'
    ],
    hobby: '운동, 독서',
    imageUrls: [
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/f/11.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/f/10.webp',
      'https://pub-0359e9e1e17e4c9182424ba236de447e.r2.dev/f/12.webp'
    ]
  }
];

export const HISTORY_DATA: TeamHistory[] = [
  { year: '2019', rank: 10, record: 'N/A', description: '05.10 창단' },
  { year: '2020', rank: 10, record: '2승 16패', description: '10위 (꼴찌)' },
  { year: '2021', rank: 9, record: '3승 15패', description: '9위' },
  { year: '2022', rank: 10, record: '3승 15패', description: '10위 (꼴찌), 900 입단' },
  { year: '2023', rank: 7, record: '6승 12패', description: '7위, 900 1부 콜업' },
  { year: '2024', rank: 6, record: '8승 10패', description: '6위, PO 진출' },
  { year: '2025', rank: 4, record: '12승 6패', description: '4위, 월즈 4강 진출' },
];

export const ROUTINE: RoutineItem[] = [
  { time: '12:00', activity: '기상' },
  { time: '13:00', activity: '스크림 & 피드백' },
  { time: '16:40', activity: '점심 식사' },
  { time: '18:00', activity: '휴식' },
  { time: '19:00', activity: '스크림 & 피드백' },
  { time: '22:00', activity: '저녁 식사' },
  { time: '23:00', activity: '개인 연습' },
  { time: '04:00', activity: '퇴근 (자율)' },
];

export const FLOORS: FloorInfo[] = [
  { floor: '4F', title: 'Management & Staff', description: '스태프&관리. 단장실, 매니저실' },
  { floor: '3F', title: 'Living Quarters', description: '선수 생활. 개인실 5개, 공용 휴게 공간, 간이 헬스장' },
  { floor: '2F', title: 'Training Center', description: '연습&전략. 메인 스크림 룸, 코치/감독실' },
  { floor: '1F', title: 'Lobby & Dining', description: '공용&외부응대. 식당&주방, 로비' },
];

export const TERMS: Term[] = [
  { term: '스토브리그 (Stove League)', definition: '시즌 종료 후 이적 시장 기간', details: '계약, 이적, 재계약이 이루어지며 전력 구성을 위한 시기.' },
  { term: '로스터 (Roster)', definition: '등록된 선수 명단', details: '주전과 후보 선수를 모두 포함한다.' },
  { term: '주전 / 후보 (Main/Sub)', definition: '중심 / 변수', details: '경기에 출전하는 기본 선수는 주전, 교체 자원은 후보.' },
  { term: '메타 (Meta)', definition: '유행하는 전략/흐름', details: '현재 패치 환경에서 가장 효율적인 챔피언이나 전술.' },
  { term: '스크림 (Scrim)', definition: '프로팀 간 진행하는 비공개 연습 경기', details: '실전형 훈련으로 승패보다 전술 검증과 피드백에 중점.' },
  { term: '피드백 (Feedback)', definition: '경기 분석 및 토의', details: '플레이 문제점을 공유하고 개선하는 과정.' },
  { term: '오더 / 콜 (Order/Call)', definition: '지시 / 호출', details: '오더는 큰 전략적 지시, 콜은 즉각적인 상황 판단 공유.' },
  { term: '감독 (Head Coach)', definition: '팀의 최고 책임자', details: '경기 운영, 밴픽, 선수 기용 결정.' },
  { term: '코치 (Coach)', definition: '선수 기량 관리', details: '세부 플레이 피드백 및 전략 구체화.' },
  { term: '매니저 (Manager)', definition: '살림꾼', details: '스케줄, 숙소, 식사 등 생활 전반 케어.' },
];

export const PRO_GUIDE = {
  general: [
    '대부분 고등학교 자퇴로 인한 중학교 졸업 학력',
    '솔로 랭크는 연습용, 점수에 큰 의미를 두지 않음',
    '연봉은 극비 사항이며, 언론에는 추정치만 공개됨',
    '포지션별 일반적인 연봉 순위: 미드 >> 원딜 > 탑 > 정글 >> 서폿'
  ],
  match: [
    '개인 장비(키보드/마우스) 지참',
    '경기 시 선수는 유니폼, 감독은 정장 또는 유니폼 착용',
    '외부 소음 차단을 위해 헤드셋에서 핑크 노이즈 출력',
    '밴픽이 종료되면 감독과 코치진은 피드백 룸에서 경기 관전'
  ]
};