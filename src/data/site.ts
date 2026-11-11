// 사이트 전반에서 쓰는 정보. 연락처나 링크가 바뀌면 여기만 고치면 됩니다.
export const site = {
  name: 'otbon',
  // 한글 이름. 문장 안에서 "옷본은", "옷본과"처럼 씀
  nameKo: '옷본',
  description:
    '옷본은 브랜드 컬렉션, 아우터, OEM, 샘플 제작을 하는 의류 제작 기업입니다. 기획부터 생산, 납품까지 한 곳에서 책임집니다.',
  email: 'info@otbon.co.kr',
  kakaoChannel: 'https://pf.kakao.com/_xxxxxx',

  // 회사 정보 (하단에 표시). bizNo 는 숫자만 적으면 화면엔 000-00-00000 모양으로 나옴
  company: {
    brand: 'OTBON (옷본)',
    ceo: '마성진',
    bizNo: '2928603861',
    address: '서울 성북구 보문로38길 11 동일하이빌 303호',
    consult: '이메일 온라인 상담을 기본으로 하며, 방문 상담은 예약제로 운영합니다.',
  },

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
  eyebrow: 'ABOUT OTBON',
  headline: [
    '**한 벌의 옷이 완성되기까지,**',
    '제작의 모든 과정을 함께하는 의류 프로모션 기업, **OTBON**입니다.',
  ],
  body: [
    '제품의 완성도와 품질, 합리적인 생산 비용의 균형을 중요하게 생각합니다.',
    '옷본은 패턴 제작부터 샘플 개발, 본생산, 납품까지 각 분야의 전문 협력업체와 긴밀하게 협업하며 의류 제작 전반을 관리합니다. 패턴의 정밀함부터 봉제, 워싱, 마감 및 품질 검수에 이르기까지 각 공정의 전문성을 바탕으로 제품의 완성도를 높입니다.',
    '체계적인 생산 관리와 효율적인 일정 운영을 통해 합리적인 비용과 안정적인 품질을 제공하며, 신뢰할 수 있는 제작 파트너가 되겠습니다.',
  ],
};

// 생산 분야(메인 화면 목록 + 사진). photo 는 src/assets/factory/factory-번호.jpg 의 번호
export const servicesIntro = {
  eyebrow: 'OUR CAPABILITIES',
  title: '브랜드에 필요한 생산을 한 곳에서',
  desc: '원단과 부자재 선정부터 패턴 개발, 재단, 봉제, 워싱 및 최종 패킹까지. 각 분야의 전문 협력업체와 긴밀하게 협업하여 안정적인 생산 과정을 지원합니다.',
};
export const services = [
  {
    title: '원단 · 부자재',
    en: 'Fabric & Trims',
    desc: '제품 특성에 적합한 원단과 부자재를 확인하고 생산 사양에 맞춰 관리합니다.',
    photo: 23,
  },
  {
    title: '패턴 개발',
    en: 'Pattern Development',
    desc: '디자인과 사이즈 사양을 바탕으로 제품의 형태와 실루엣을 구현합니다.',
    photo: 9,
  },
  {
    title: '재단 · 봉제',
    en: 'Cutting & Sewing',
    desc: '확정된 패턴과 작업 사양에 따라 재단 및 봉제 공정을 진행합니다.',
    photo: 17,
  },
  {
    title: '워싱 · 후가공',
    en: 'Washing & Finishing',
    desc: '제품의 소재와 디자인 특성에 맞는 워싱 및 후가공을 진행합니다.',
    photo: 21,
  },
  {
    title: '품질 검수',
    en: 'Quality Control',
    desc: '사이즈, 봉제 상태, 마감 등 제품의 주요 품질 항목을 확인합니다.',
    photo: 15,
  },
  {
    title: '패킹 · 납품',
    en: 'Packing & Delivery',
    desc: '검수가 완료된 제품을 기준에 맞게 포장하고 지정된 장소에 납품합니다.',
    photo: 5,
  },
];

// 제작현황(현장 사진) 두 줄. 번호 = src/assets/factory/factory-번호.jpg
// factory = 사진에 마우스를 올리면 나오는 공장 이름
// ※ 지금 공장 이름은 모두 '예시'입니다. 실제 공장이 정해지면 이름을 바꾸고 아래 galleryExample 을 false 로 바꾸세요.
export const galleryExample = true;
export const gallery = [
  [
    { photo: 4, alt: '봉제 작업장 전경', factory: '단동 제1공장' },
    { photo: 21, alt: '산업용 세탁 설비', factory: '단동 세탁공장' },
    { photo: 3, alt: '재봉틀로 작업하는 모습', factory: '단동 제2공장' },
    { photo: 17, alt: '봉제 라인 작업 모습', factory: '단동 제1공장' },
    { photo: 22, alt: '대형 작업장 내부', factory: '청도 공장' },
    { photo: 32, alt: '생산 라인 전경', factory: '단동 제2공장' },
    { photo: 6, alt: '부자재 작업 모습', factory: '청도 공장' },
    { photo: 24, alt: '마감 작업 공간', factory: '하노이 공장' },
  ],
  [
    { photo: 29, alt: '봉제 설비가 놓인 작업대', factory: '단동 제1공장' },
    { photo: 5, alt: '포장 대기 중인 제품', factory: '하노이 공장' },
    { photo: 16, alt: '재봉틀 작업 라인', factory: '단동 제2공장' },
    { photo: 33, alt: '생산 중인 원단과 제품', factory: '청도 공장' },
    { photo: 34, alt: '샘플 검수 공간', factory: '서울 본사' },
    { photo: 23, alt: '원단 정리 작업', factory: '단동 제1공장' },
    { photo: 30, alt: '봉제 작업 모습', factory: '하노이 공장' },
    { photo: 14, alt: '완성품 정리 공간', factory: '단동 세탁공장' },
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

// 제작 과정 (메인 화면, 네 칸)
// photo = src/assets/factory/factory-번호.jpg
export const processIntro = {
  title: '하나의 샘플을 완성하는 체계적인 네 단계',
  desc: '각 단계의 진행 사항을 면밀하게 확인하며 샘플 한 벌부터 완제품까지 완성도 높은 결과를 만들어갑니다.',
};
export const process = [
  {
    step: '01',
    en: 'Consultation',
    title: '대면 상담',
    photo: 34,
    desc: '브랜드의 제작 목적과 요구 사항을 직접 확인하고, 제품의 디자인 사양과 원단, 부자재, 생산 조건 등을 구체적으로 협의합니다.',
  },
  {
    step: '02',
    en: 'Pattern Development',
    title: '패턴 개발',
    photo: 29,
    desc: '협의된 디자인과 제품 사양을 바탕으로 패턴을 설계합니다. 제품의 실루엣과 사이즈, 착용감 등을 고려해 완성도 높은 샘플 제작의 기초를 마련합니다.',
  },
  {
    step: '03',
    en: 'Sample Making',
    title: '샘플 제작',
    photo: 3,
    desc: '개발된 패턴을 바탕으로 샘플을 제작합니다. 봉제 방식과 디테일, 실루엣 등을 세밀하게 확인하고 필요한 수정 사항을 반영하여 최종 샘플을 완성합니다.',
  },
  {
    step: '04',
    en: 'Quality Control',
    title: '품질 검수',
    photo: 14,
    desc: '완성된 제품의 사이즈, 봉제 상태, 워싱 및 마감 등을 종합적으로 검수합니다. 정해진 품질 기준에 부합하는 제품을 선별하여 안정적인 품질을 확보합니다.',
  },
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
