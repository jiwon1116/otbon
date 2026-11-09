// 사이트 전반에서 쓰는 정보. 연락처나 링크가 바뀌면 여기만 고치면 됩니다.
export const site = {
  name: 'otbon',
  // 한글 이름. 문장 안에서 "옷본은", "옷본과"처럼 씀
  nameKo: '옷본',
  description:
    '옷본은 단체복, 아우터, OEM, 샘플 제작을 하는 의류 제작 회사입니다. 기획부터 생산까지 한 곳에서 맡겨보세요.',
  email: 'hello@otbon.co.kr',
  kakaoChannel: 'https://pf.kakao.com/_xxxxxx',

  // 첫 화면 배경 영상. public/videos/hero.mp4 를 넣으면 바로 적용됩니다.
  // 영상이 없거나 로딩 중일 땐 poster 사진(src/assets/factory/ 번호)이 보입니다.
  hero: {
    video: '/videos/hero.mp4',
    poster: 33,
  },
};

// 메뉴. '/#about' 처럼 #이 붙은 건 메인 화면의 해당 섹션으로 이동
// children 이 있으면 메뉴에 마우스를 올렸을 때 아래로 하위 메뉴가 펼쳐짐
export const nav: {
  label: string;
  href: string;
  en?: string;
  children?: { label: string; href: string; desc: string }[];
}[] = [
  {
    label: '회사소개',
    href: '/#about',
    en: 'COMPANY',
    children: [
      { label: '회사소개', href: '/#about', desc: '옷본이 하는 일과 생산 과정' },
      { label: 'CI', href: '/ci', desc: '로고와 심볼에 담긴 의미' },
    ],
  },
  { label: '제작 기준', href: '/standards' },
  { label: '생산 분야', href: '/#production' },
  { label: '제작현황', href: '/#works' },
];

// 회사 소개 섹션 문구. **굵게** 로 감싼 부분은 진하게 표시됩니다.
export const about = {
  eyebrow: 'MADE IN OUR FACTORY',
  headline: [
    '디자인이 **한 벌의 옷이 되기까지,**',
    '모든 과정을 직접 책임지는 의류 제작 기업 **옷본**입니다.',
  ],
  body: [
    '**재단**, **봉제**, **세탁**, **검수**까지 생산 라인을 직접 운영합니다. 공정마다 사람이 직접 확인하기 때문에, 처음 약속한 품질과 납기를 지킬 수 있습니다.',
    '소량 단체복부터 브랜드 시즌 생산까지, 수량과 일정에 맞춰 가장 알맞은 방식을 함께 찾아드립니다.',
  ],
};

// 생산 분야. photo 는 src/assets/factory/factory-번호.jpg 의 번호
export const services = [
  {
    title: '단체복',
    en: 'Team Wear',
    desc: '회사, 학교, 동아리, 행사용 티셔츠와 후드를 소량부터 대량까지 제작합니다.',
    photo: 31,
  },
  {
    title: '아우터',
    en: 'Outerwear',
    desc: '바람막이, 점퍼, 플리스 등 원단 선택부터 부자재까지 맞춤으로 제작합니다.',
    photo: 18,
  },
  {
    title: 'OEM',
    en: 'OEM Production',
    desc: '브랜드의 디자인을 받아 패턴, 원단, 생산, 검수까지 대신 진행합니다.',
    photo: 15,
  },
  {
    title: '샘플 제작',
    en: 'Sampling',
    desc: '본 생산 전, 핏과 원단을 직접 확인할 수 있도록 샘플을 먼저 만들어 드립니다.',
    photo: 9,
  },
];

// 제작현황(현장 사진) 두 줄. 번호 = src/assets/factory/factory-번호.jpg
export const gallery = [
  [
    { photo: 4, alt: '봉제 작업장 전경' },
    { photo: 21, alt: '산업용 세탁 설비' },
    { photo: 3, alt: '재봉틀로 작업하는 모습' },
    { photo: 17, alt: '봉제 라인 작업 모습' },
    { photo: 22, alt: '대형 작업장 내부' },
    { photo: 32, alt: '생산 라인 전경' },
    { photo: 6, alt: '부자재 작업 모습' },
    { photo: 24, alt: '마감 작업 공간' },
  ],
  [
    { photo: 29, alt: '봉제 설비가 놓인 작업대' },
    { photo: 5, alt: '포장 대기 중인 제품' },
    { photo: 16, alt: '재봉틀 작업 라인' },
    { photo: 33, alt: '생산 중인 원단과 제품' },
    { photo: 34, alt: '샘플 검수 공간' },
    { photo: 23, alt: '원단 정리 작업' },
    { photo: 30, alt: '봉제 작업 모습' },
    { photo: 14, alt: '완성품 정리 공간' },
  ],
];

// 본사·지사 지도. 스크롤하면 위에서부터 순서대로 지도가 이동하며 나라가 강조됩니다.
// code = 나라 번호(ISO 3166 숫자 코드). 한국 410, 중국 156, 베트남 704
// 첫 번째가 본사이고, 나머지 지사에는 본사에서 선이 이어집니다.
// cities = 지도에 점과 이름이 찍히는 도시. pin = [경도, 위도] (비우면 나라 한가운데),
//   side = 이름을 점의 왼쪽/오른쪽 중 어디에 쓸지, sub = 이름 밑 작은 글씨
type City = { name: string; sub?: string; pin?: [number, number]; side?: 'left' | 'right' };
// zoom = 그 장면 확대 배율 (비우면 나라 크기에 맞춰 자동)
// region = 나라 전체 대신 이 행정구역만 초록으로 칠함 (src/data/regions.json 의 id, 비우면 나라 전체)
type Office = { code: number; name: string; role: string; caption: string[]; cities: City[]; zoom?: number; region?: string };

// intro = 첫 장면(세계 지도 전체)에 나오는 글자
export const network: { eyebrow: string; intro: { caption: string[]; name: string }; offices: Office[] } = {
  eyebrow: 'GLOBAL NETWORK',
  intro: { caption: ['한국 본사에서 중국, 베트남 지사까지', '옷본의 생산 네트워크 입니다.'], name: 'Network' },
  offices: [
    {
      code: 410, name: 'Korea', role: 'HEADQUARTERS',
      caption: ['기획부터 샘플, 품질 관리까지 책임지는', '옷본의 본사, 대한민국 입니다.'],
      cities: [{ name: '한국', side: 'right' }],
    },
    {
      code: 156, name: 'China', role: 'BRANCH 01', zoom: 2.6, region: 'CN-LN', // 중국 전체 말고 랴오닝성만
      caption: ['원단과 부자재, 대량 생산을 맡는', '옷본의 중국 단동 지사 입니다.'],
      cities: [{ name: '단동', sub: '랴오닝성', pin: [124.39, 40.13], side: 'left' }],
    },
    {
      code: 704, name: 'Vietnam', role: 'BRANCH 02', zoom: 7, region: 'VN-54', // 베트남 전체 말고 박지앙성만
      caption: ['봉제와 시즌 생산을 맡는', '옷본의 베트남 하노이 박지앙 지사 입니다.'],
      cities: [{ name: '박지앙', sub: '하노이', pin: [106.2, 21.27], side: 'left' }],
    },
  ],
};

// 브랜드 스토리 섹션 문구. icon = 카드 아이콘 종류 (thread 실뭉치 / globe 지구 / symbol 원형 심볼)
export const brandStory = {
  label: 'BRAND STORY',
  title: ['실 한 가닥에서 시작해', '세계를 잇습니다'],
  body: [
    'OTBON의 심볼은 이니셜 O와 B, 그리고 지구를 하나의 원 안에 담았습니다. O의 원형 구조 안에 B의 형태를 배치하고, 실을 연상시키는 반복적인 수평선으로 의류 생산 브랜드의 정체성을 표현했습니다.',
    '원단의 결처럼 촘촘히 이어진 선은 한 벌의 옷이 완성되기까지의 정직한 과정을, 이 선을 감싼 둥근 지구는 국내를 넘어 세계로, 고객과 함께 넓혀가는 생산 네트워크를 의미합니다.',
    '간결한 기하학적 형태로 전문적이고 안정적인 브랜드 이미지를 전합니다.',
  ],
  cards: [
    { icon: 'thread', title: 'Thread · 실', desc: '한 가닥의 실에서 시작되는 정교한 제작 과정' },
    { icon: 'globe', title: 'Global · 세계', desc: '국내를 넘어 세계로 이어지는 생산 네트워크' },
    { icon: 'symbol', title: 'OTBON', desc: '브랜드 이니셜 O와 B의 형태' },
  ] as { icon: 'thread' | 'globe' | 'symbol'; title: string; desc: string }[],
  closing: '보이지 않는 한 땀까지, OTBON이 책임집니다.',
  // CI 페이지 브랜드 컬러. hex 만 바꾸면 RGB 는 자동 계산. dark = 글자를 흰색으로
  colors: [
    { name: 'Forest Green', ko: '포레스트 그린', hex: '#2E5B45', desc: '옷본의 대표 색. 로고와 강조에 씁니다.', dark: true },
    { name: 'Ink Black', ko: '잉크 블랙', hex: '#282828', desc: '로고와 글자. 단단하고 정직한 인상', dark: true },
    { name: 'Linen Beige', ko: '린넨 베이지', hex: '#F5F1E8', desc: '원단의 바탕처럼 편안한 배경색', dark: false },
  ],
};

// 함께한 업체. logo 에 public/ 기준 이미지 경로를 적으면 로고가 나옵니다. (예: '/images/partners/abc.png')
export const partners = [
  { name: '', logo: '' },
  { name: '', logo: '' },
  { name: '', logo: '' },
  { name: '', logo: '' },
  { name: '', logo: '' },
  { name: '', logo: '' },
];

export const process = [
  { step: '01', title: '상담 · 견적', desc: '수량, 일정, 예산을 듣고 맞는 원단과 방식으로 견적을 드립니다.' },
  { step: '02', title: '디자인 · 샘플', desc: '디자인 시안을 확정하고 샘플로 핏과 퀄리티를 먼저 확인합니다.' },
  { step: '03', title: '생산', desc: '확정된 샘플 기준으로 생산하고 공정마다 품질을 점검합니다.' },
  { step: '04', title: '검수 · 납품', desc: '전수 검수 후 포장해 약속한 날짜에 납품합니다.' },
];

// image가 비어 있으면 회색 자리 표시가 나옵니다. public/images/portfolio/ 에 사진을 넣고 경로를 적어주세요.
export const portfolio = [
  { title: 'IT 기업 워크숍 후드', category: '단체복', image: '' },
  { title: '스트리트 브랜드 바람막이', category: 'OEM', image: '' },
  { title: '대학 학생회 과잠', category: '아우터', image: '' },
  { title: '러닝 크루 기능성 티셔츠', category: '단체복', image: '' },
  { title: '신규 브랜드 런칭 샘플', category: '샘플 제작', image: '' },
  { title: '카페 유니폼 앞치마', category: 'OEM', image: '' },
];

export const testimonials = [
  {
    quote: '처음 해보는 단체복이라 막막했는데, 원단부터 하나하나 설명해주셔서 편하게 맡길 수 있었어요.',
    name: '김OO',
    org: '스타트업 운영팀',
  },
  {
    quote: '샘플 단계에서 수정 요청을 여러 번 드렸는데도 빠르게 반영해주셨습니다. 본 생산 퀄리티도 만족스러웠어요.',
    name: '이OO',
    org: '의류 브랜드 대표',
  },
  {
    quote: '행사 날짜가 촉박했는데 일정 맞춰서 납품해주셔서 정말 감사했습니다.',
    name: '박OO',
    org: '대학교 학생회',
  },
];

export const faqs = [
  {
    q: '최소 주문 수량이 있나요?',
    a: '제품과 방식에 따라 다르지만 단체복은 보통 30장부터 가능합니다. 정확한 수량은 문의 주시면 안내해 드립니다.',
  },
  {
    q: '제작 기간은 얼마나 걸리나요?',
    a: '단체복은 디자인 확정 후 약 2~3주, OEM은 샘플 포함 약 4~8주가 걸립니다. 급한 일정도 상담해 주세요.',
  },
  {
    q: '디자인 파일이 없어도 되나요?',
    a: '네. 참고 이미지나 간단한 스케치만 있어도 디자인 시안을 함께 만들어 드립니다.',
  },
  {
    q: '샘플만 따로 제작할 수 있나요?',
    a: '가능합니다. 본 생산 전에 핏과 원단을 확인하고 싶은 경우 샘플만 먼저 의뢰하실 수 있습니다.',
  },
];
