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
export const nav = [
  { label: '회사소개', href: '/#about' },
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

// 본사·지사 지도. 스크롤하면 위에서부터 순서대로 나라 테두리가 바느질되듯 그려집니다.
// code = 나라 번호(ISO 3166 숫자 코드). 한국 410, 중국 156, 베트남 704
// 첫 번째가 본사이고, 나머지 지사에는 본사에서 실이 이어집니다.
// pin = 단추(핀) 위치 [경도, 위도]. 비우면 나라 한가운데. 도시가 정해지면 그 좌표를 넣어주세요.
// tag = 큰 화면에서 이름표가 단추의 어느 쪽에 걸릴지 ('left' | 'right')
type Office = {
  code: number;
  name: string;
  nameKo: string;
  role: string;
  desc: string;
  pin?: [number, number];
  line?: number; // 지도 이름표를 잇는 실 길이(px), 기본 44
  tag: 'left' | 'right';
};

export const network: { eyebrow: string; headline: string[]; offices: Office[] } = {
  eyebrow: 'GLOBAL NETWORK',
  headline: ['한 땀씩 이어온,', '옷본의 생산 네트워크'],
  offices: [
    { code: 410, name: 'Korea', nameKo: '대한민국', role: 'HQ', desc: '기획 · 샘플 · 품질 관리', tag: 'right' },
    // 단동 지사: 핀을 나라 한가운데가 아니라 단동(랴오닝성, 북한 국경)에 찍음
    { code: 156, name: 'China', nameKo: '중국 단동', role: 'BRANCH 01', desc: '원단 · 부자재 · 대량 생산', pin: [124.39, 40.13], tag: 'left', line: 18 },
    // 임시 핀: 나라 모양이 S자라 한가운데가 라오스로 잡혀서 중부 해안에 찍음
    { code: 704, name: 'Vietnam', nameKo: '베트남', role: 'BRANCH 02', desc: '봉제 · 시즌 생산', pin: [107.2, 16.6], tag: 'right' },
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
