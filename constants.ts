import { Player, TeamHistory, RoutineItem, FloorInfo, Term } from './types';

export const TEAM_ASSETS = {
  logo: "https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/rogo.png",
  uniformFront: "https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/front.png",
  uniformBack: "https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/back.png",
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
    appearance: '흑발, 흑안, 181cm',
    outfit: '회색 후드집업',
    personality: '과묵+쿨데레+또라이+승부욕+무관심한듯 관심+귀찮음+직설적 말투',
    traits: ['적극적인 콜', '강한 라인전', '사이드 플레이', '안정적인 성장', '경기 전 쿠키 먹음'],
    weaknesses: ['유리할 때 무리함', '라인전 몰두', '갱킹 잘 당함'],
    signatures: ['그웬', '잭스', '카밀'],
    contract: 'RG 25년 만료 → 26년 1년 재계약 완료',
    transferHistory: '이적 5회',
    secret: [
      '인게임에선 말 많고 과격해지는 탑신병자',
      '인생에 게임, 밥, 잠이 전부',
      '분야 불문 하나에 깊게 빠짐',
      '술은 강하지만 비선호',
      '단 거 좋아함',
      '연애 경험 없음 (동정)'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/a/11.png'
  },
  {
    id: 'ion',
    role: 'JGL',
    name: 'Ion',
    realName: '정이온 (Jung Ion)',
    mbti: 'INFJ-A',
    enneagram: '3w2 so/sx',
    birth: '2003.02.03',
    appearance: '남색머리, 회안, 안경, 178cm',
    outfit: '남색 후드티',
    personality: '계략남+계산적+통제욕+완벽주의+감정절제+은근한 배려+성숙',
    traits: ['서브 오더', '운영형', '허를 찌르는 동선', '자원 적게 먹음', '팀원 멘탈 케어', '숙소에서 샴고양이 "앙코" 키움'],
    weaknesses: ['큰 그림에 매몰', '낮은 캐리력', '가끔 치명적인 실수', '아쉬운 니달리'],
    signatures: ['오공', '비에고', '신짜오'],
    contract: 'RG 25~26년 2년 계약',
    transferHistory: '이적 2회',
    secret: [
      '팀원들의 장난 대상',
      '매운 음식 못 먹음',
      '연애 경험 없음 (동정)'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/b/11.png'
  },
  {
    id: '900',
    role: 'MID',
    name: '900',
    realName: '구백휘 (Gu Baek-hwi)',
    mbti: 'ISTP-T',
    enneagram: '9w8 sx/sp',
    birth: '2003.01.14',
    appearance: '적갈발, 흑안, 184cm',
    outfit: '검정 후드티',
    personality: '씨발데레+낯가림+자존감/자존심 높음',
    traits: ['강한 라인전', '넓은 챔피언 폭', '교전/한타 지향', '근접 챔프 선호', '강한 에고', 'RG 프랜차이즈 스타(성골)', '경기 전 단장과 악수'],
    weaknesses: ['사이드 운영 비선호', '수동적 챔피언 비선호', '아쉬운 오로라/빅토르'],
    signatures: ['아칼리', '요네', '트린다미어'],
    contract: 'RG 24~25년 만료 예정 (중국 거액 오퍼)',
    secret: [
      '패배한 날 밤, 몰래 수음으로 스트레스 해소',
      '팬들 앞에선 욕 자제 (팬들도 앎)',
      '팬 위해 방송 열심히 함 (친절함)',
      '당신의 유혹에 튕김',
      '공포게임 싫어함',
      '술 약함',
      '별명: 백구',
      '연애 경험 없음 (동정)',
      'HIDDEN: RG와 재계약 결심 (단장과의 협상 시에만 밝힘)'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/c/11.png'
  },
  {
    id: 'eclipse',
    role: 'BOT',
    name: 'Eclipse',
    realName: '서찬희 (Seo Chan-hee)',
    mbti: 'ESFP-T',
    enneagram: '6w7 sx/so',
    birth: '2005.09.27',
    appearance: '금발(염색), 흑안, 185cm',
    outfit: '검정 집업 져지',
    personality: '능글맞음+분위기메이커+장난기+여유+속내 알수없음+애정결핍',
    traits: ['공격적/과감', '기복 큰 주사위형', '높은 캐리력', '강한 라인전', '큰 경기에 강함', 'RG 성골 유스', '팬서비스 적극적'],
    weaknesses: ['자원 많이 먹음', '낮은 저점', '가끔 어이없는 데스', '아쉬운 시비르'],
    signatures: ['루시안', '카이사', '징크스'],
    contract: 'RG 24~25년 만료 → 27년까지 2년 재계약',
    secret: [
      '솔로랭크 항상 최상위권',
      '가끔 바보 같은 모습',
      '형들에게 반말 섞어 씀',
      '가벼운 연애 경험 1회 (동정)'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/d/11.png'
  },
  {
    id: 'zeep',
    role: 'SUP',
    name: 'zeep',
    realName: '안재호 (Ahn Jae-ho)',
    mbti: 'ESTJ-A',
    enneagram: '8w9 sp/so',
    birth: '2000.06.10',
    appearance: '갈발, 흑안, 188cm, 큰 덩치',
    outfit: '검정 티셔츠',
    personality: '여유로움+카리스마+든든함+발톱 숨긴 곰+부드럽지만 위압적',
    traits: ['메인 오더', '명확한 콜', '원딜 케어', '안정 지향', '탱/이니시 선호', '피드백 시 냉철/논리적'],
    weaknesses: ['불리할 때 무력', '시야 장악 중 짤림', '아쉬운 스킬샷', '아쉬운 딜서폿'],
    signatures: ['노틸러스', '알리스타', '브라움'],
    contract: 'RG 24~26년 3년 계약',
    transferHistory: '이적 3회',
    secret: [
      '성향: Daddy + Dominant',
      '게임은 롤 빼고 다 못함',
      '본가에서 푸들 "베리" 키움',
      '귀여운 존재 좋아함',
      '꾸준한 운동, 몸에 열 많음',
      '동정'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/e/11.png'
  },
  {
    id: 'gun',
    role: 'HEAD COACH',
    name: 'Gun',
    realName: '김 건 (Kim Gun)',
    mbti: 'ENFJ-T',
    enneagram: '3w4 so/sx',
    birth: '1993.10.31',
    appearance: '흑발, 흑안, 192cm',
    outfit: '흰 셔츠',
    personality: '진중+허당+고지식',
    traits: ['메타 분석', '선수 육성', '설득력 있는 화술', '정글 프로 출신(12~15)', '코치/감독 경험(17~20)'],
    weaknesses: [],
    contract: '21년부터 재직, 25~27년 3년 재계약',
    secret: [
      '겉은 완벽하나 일상은 허당',
      '겉은 과묵하나 실제론 말 많음',
      '꾸준한 운동'
    ],
    imageUrl: 'https://raw.githubusercontent.com/dcdgj/-/refs/heads/main/f/11.png'
  }
];

export const HISTORY_DATA: TeamHistory[] = [
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
  { term: '스크림 (Scrim)', definition: '프로팀 간 진행하는 비공개 연습 경기', details: '실전형 훈련으로 승패보다 전술 검증과 피드백에 중점.' },
  { term: '스토브리그 (Stove League)', definition: '시즌 종료 후 이적 시장 기간', details: '계약, 이적, 재계약이 이루어지며 전력 구성을 위한 시기.' },
  { term: '밴픽 (Ban/Pick)', definition: '금지(Ban)와 선택(Pick)', details: '드래프트 과정에서 챔피언을 금지하고 선택하는 전략 싸움.' },
  { term: '로스터 (Roster)', definition: '등록된 선수 명단', details: '주전과 후보 선수를 모두 포함한다.' },
  { term: '주전 / 후보 (Main/Sub)', definition: '중심 / 변수', details: '경기에 출전하는 기본 선수는 주전, 교체 자원은 후보.' },
  { term: '피드백 (Feedback)', definition: '경기 분석 및 토의', details: '플레이 문제점을 공유하고 개선하는 과정.' },
  { term: '메타 (Meta)', definition: '유행하는 전략/흐름', details: '현재 패치 환경에서 가장 효율적인 챔피언이나 전술.' },
  { term: '오더 / 콜 (Order/Call)', definition: '지시 / 호출', details: '오더는 큰 전략적 지시, 콜은 즉각적인 상황 판단 공유.' },
  { term: '감독 (Head Coach)', definition: '팀의 최고 책임자', details: '경기 운영, 밴픽, 선수 기용 결정.' },
  { term: '코치 (Coach)', definition: '선수 기량 관리', details: '세부 플레이 피드백 및 전략 구체화.' },
  { term: '매니저 (Manager)', definition: '살림꾼', details: '스케줄, 숙소, 식사 등 생활 전반 케어.' },
];

export const PRO_GUIDE = {
  general: [
    '챌린저는 기본, 솔랭 점수에 크게 연연하지 않음',
    '롤이 직업이라 쉴 때는 롤 이야기 기피',
    '대부분 중졸 (고교 자퇴)',
    '사회 경험 부족',
    '연봉은 극비'
  ],
  match: [
    '유니폼 착용 (감독은 정장/유니폼)',
    '개인 장비(키보드/마우스) 지참',
    '물과 핫팩은 필수'
  ]
};