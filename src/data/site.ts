// 사이트 전반에서 쓰는 정보. 연락처나 링크가 바뀌면 여기만 고치면 됩니다.
export const site = {
  name: 'otban',
  description:
    'otban은 단체복, 아우터, OEM, 샘플 제작을 하는 의류 제작 회사입니다. 기획부터 생산까지 한 곳에서 맡겨보세요.',
  email: 'hello@otban.kr',
  kakaoChannel: 'https://pf.kakao.com/_xxxxxx',

  // 첫 화면 배경 영상. public/ 폴더의 파일을 같은 이름으로 바꾸면 바로 적용됩니다.
  hero: {
    video: '/videos/hero.mp4',
    poster: '/images/hero-poster.svg',
  },
};

export const nav = [
  { label: '서비스', href: '/services' },
  { label: '포트폴리오', href: '/portfolio' },
  { label: '회사 소개', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export const services = [
  {
    title: '단체복',
    en: 'Team Wear',
    desc: '회사, 학교, 동아리, 행사용 티셔츠와 후드를 소량부터 대량까지 제작합니다.',
  },
  {
    title: '아우터',
    en: 'Outerwear',
    desc: '바람막이, 점퍼, 플리스 등 원단 선택부터 부자재까지 맞춤으로 제작합니다.',
  },
  {
    title: 'OEM',
    en: 'OEM Production',
    desc: '브랜드의 디자인을 받아 패턴, 원단, 생산, 검수까지 대신 진행합니다.',
  },
  {
    title: '샘플 제작',
    en: 'Sampling',
    desc: '본 생산 전, 핏과 원단을 직접 확인할 수 있도록 샘플을 먼저 만들어 드립니다.',
  },
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
