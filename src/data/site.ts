// 사이트 전반에서 쓰는 정보. 연락처나 링크가 바뀌면 여기만 고치면 됩니다.
export const site = {
  name: 'otbon',
  // 한글 이름. 문장 안에서 "옷본은", "옷본과"처럼 씀
  nameKo: '옷본',
  description:
    '옷본은 브랜드 컬렉션, 아우터, OEM, 샘플 제작을 하는 의류 제작 기업입니다. 기획부터 생산, 납품까지 한 곳에서 책임집니다.',
  email: 'info@otbon.co.kr',
  // 문의 폼 키 (Web3Forms, https://web3forms.com 에서 받는 이메일을 넣으면 키가 메일로 옴). 비워두면 폼 대신 이메일로 안내
  formKey: '266ef106-5713-49dd-a999-5e5bc3c86fca',
  kakaoChannel: 'https://pf.kakao.com/_xxxxxx',

  // 회사 정보 (하단에 표시). bizNo 는 숫자만 적으면 화면엔 000-00-00000 모양으로 나옴
  company: {
    brand: 'OTBON (옷본)',
    ceo: '마성진',
    bizNo: '2928603861',
    address: '서울 성북구 보문로38길 11 동일하이빌 303호',
    phone: '070-8668-6390',
    consult: '제작 문의는 이메일과 전화로 상담해 드립니다. 작업지시서나 참고 자료가 있으시면 이메일로 함께 보내주세요.',
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
    href: '/about',
    en: 'COMPANY',
    children: [
      { label: '기업개요', href: '/about', desc: '회사 이야기' },
      { label: 'CI', href: '/ci', desc: '로고에 담긴 의미' },
    ],
  },
  { label: '제작 기준', href: '/standards', en: 'STANDARDS' },
  { label: '생산 분야', href: '/production', en: 'CAPABILITIES' },
  { label: '지사 소개', href: '/branches', en: 'NETWORK' },
  { label: '거래 안내', href: '/guide', en: 'TERMS & FAQ' },
];

// 회사 소개 섹션 문구. **굵게** 로 감싼 부분은 진하게 표시됩니다.
export const about = {
  eyebrow: 'ABOUT OTBON',
  headline: [
    '**한 벌의 옷이 완성되기까지,**',
    '제작의 모든 과정을 함께하는 의류 프로모션 기업',
    '**OTBON**입니다.',
  ],
  body: [
    '제품의 완성도와 품질, 합리적인 생산 비용의 균형을 중요하게 생각합니다.',
    '옷본은 패턴 개발부터 샘플 제작, 본생산, 납품까지 각 분야의 전문 협력업체와 긴밀하게 협업하며 의류 제작 전반을 관리합니다. 패턴의 정밀함부터 봉제, 워싱, 마감 및 품질 검수에 이르기까지 각 공정의 전문성을 바탕으로 제품의 완성도를 높입니다.',
    '체계적인 생산 관리와 효율적인 일정 운영을 통해 안정적인 품질을 제공하며, 신뢰할 수 있는 제작 파트너가 되겠습니다.',
  ],
};

// 생산 분야(메인 화면 목록 + 사진). photo 는 src/assets/factory/factory-번호.jpg 의 번호
export const servicesIntro = {
  eyebrow: 'OUR CAPABILITIES',
  title: '브랜드에 필요한 생산을 한 곳에서',
  desc: '원단 개발부터 패턴, 재단, 봉제, 워싱을 거쳐 최종 납품까지. 각 분야의 전문 협력업체와 협업하여 안정적인 생산 과정을 지원합니다.',
};
// 생산 분야 > 원단 개발 (/production, 공정 카드 아래 따로 한 칸)
// photo = 왼쪽 큰 원단 사진 (public 기준 경로). 비우면 아래 swatches 로 스와치북 모양을 그림
// swatches = 스와치북 조각 (위에서부터 겹침). kind: woven(우븐 결) | knit(니트 골), base = 원단 색
//   img 에 public 기준 사진 경로를 넣으면 그 조각은 실제 원단 사진으로 보임
//   still: true 면 그 사진은 확대 움직임 없이 그대로 (잔무늬 체크는 확대하면 눈이 아픔)
// specs = 조건 (제목 · 큰 글씨), cases = 개발 사례 목록 (이름 · 설명 · 종류)
export const fabricDev = {
  photo: '',
  en: 'Fabric Development',
  title: '원단 개발',
  desc: '제품의 특성과 용도에 적합한 원단을 개발합니다. 소재의 구성부터 조직, 두께, 촉감, 컬러까지 세부 사양을 검토하고 요구하는 기준에 맞춰 원단을 구현합니다.',
  specs: [
    { label: '개발 범위', value: '다이마루 ~ 우븐', note: '니트(다이마루)부터 우븐까지 개발 가능' },
    { label: '최소 수량', value: '컬러당 1,500m', note: '원단 개발은 컬러당 최소 1,500m부터 진행' },
  ],
  swatches: [
    // 밝은 컬러 → 어두운 컬러 순 (원단끼리도, 같은 원단의 컬러끼리도)
    { name: '편직 원단', type: '우븐', color: '', base: '#e9edf2', kind: 'woven', img: '/images/fabric/knit-stripe.jpg' },
    { name: '체크 원단', type: '우븐', color: '오렌지', base: '#e2a35c', kind: 'woven', img: '/images/fabric/check-orange.jpg', still: true },
    { name: '체크 원단', type: '우븐', color: '레드', base: '#b3263a', kind: 'woven', img: '/images/fabric/check-red.jpg', still: true },
    { name: '체크 원단', type: '우븐', color: '블루', base: '#1f4e85', kind: 'woven', img: '/images/fabric/check-blue.jpg', still: true },
    { name: '몰스킨', type: '우븐', color: '차콜', base: '#3a3936', kind: 'woven', img: '/images/fabric/moleskin-charcoal.jpg' },
    { name: '몰스킨', type: '우븐', color: '올리브', base: '#5d5f45', kind: 'woven', img: '' },
    { name: '편직 원단', type: '우븐', color: '네이비', base: '#27304a', kind: 'woven', img: '' },
  ] as { name: string; type: string; color: string; base: string; kind: 'woven' | 'knit'; img: string; still?: boolean }[],
  cases: [
    { name: '편직 원단', type: '우븐', desc: '브랜드 요청 사양에 따라 별도로 개발한 편직 원단' },
    { name: '체크 원단', type: '우븐', desc: '컬러별로 만나볼 수 있는 체크 원단' },
    { name: '몰스킨', type: '우븐', desc: '촘촘한 조직과 부드러운 기모감이 특징인 면 소재' },
  ],
};

// 생산 분야 > 제품 사진 (/production). 품목마다 한 줄씩, 사진이 옆으로 이어짐
// imgs 에 public 폴더 기준 경로를 넣으면 순서대로 보임 (예: '/images/products/jacket-1.jpg')
// 사진이 아직 없으면 [] 로 두면 크림색 빈 칸으로 자리만 보임
// 뒷면 사진이 있으면 { src: 앞면, back: 뒷면 } 으로 넣기 → 마우스를 올리면 뒷면이 보임
export type ProductImg = string | { src: string; back?: string };
export const products = {
  en: 'Archive',
  title: '제작 아카이브',
  // 한 줄씩 끊어서 보임
  desc: ['다양한 브랜드와 함께 만들어 온', 'OTBON의 의류 제작 결과물을 담았습니다.'],
  items: [
    // 품목마다 사진은 밝은 옷 → 어두운 옷 순
    { name: '셔츠', en: 'Shirt', imgs: ['/images/products/shirt-3.jpg', '/images/products/shirt-2.jpg', '/images/products/shirt-1.jpg'] },
    { name: '재킷', en: 'Jacket', imgs: ['/images/products/jacket-1.jpg', '/images/products/jacket-3.jpg', '/images/products/jacket-2.jpg', '/images/products/jacket-4.jpg', { src: '/images/products/jacket-5.jpg', back: '/images/products/jacket-5-front.jpg' }, { src: '/images/products/jacket-6.jpg', back: '/images/products/jacket-6-back.jpg' }] as ProductImg[] },
    { name: '점퍼', en: 'Jumper', imgs: ['/images/products/jumper-2.jpg', '/images/products/jumper-3.jpg', '/images/products/jumper-6.jpg', '/images/products/jumper-5.jpg', '/images/products/jumper-1.jpg', '/images/products/jumper-4.jpg'] },
    { name: '다운', en: 'Down', imgs: ['/images/products/down-1.jpg', '/images/products/down-5.jpg', '/images/products/down-4.jpg', '/images/products/down-3.jpg', '/images/products/down-2.jpg'] },
    { name: '코트', en: 'Coat', imgs: ['/images/products/coat-3.jpg', '/images/products/coat-2.jpg', '/images/products/coat-1.jpg'] },
    { name: '팬츠', en: 'Pants', imgs: ['/images/products/pants-2.jpg', '/images/products/pants-5.jpg', '/images/products/pants-3.jpg', '/images/products/pants-4.jpg', '/images/products/pants-1.jpg'] },
  ],
};

export const services = [
  {
    title: '패턴 개발',
    en: 'Pattern Development',
    desc: '디자인 의도를 반영해 각 부위의 형태와 치수를 설계하고, 실제 제품 제작을 위한 패턴을 완성합니다.',
    photo: 9,
  },
  {
    title: '원단 · 부자재',
    en: 'Fabric & Trims',
    desc: '제품 특성과 디자인에 맞는 원단 및 부자재를 검토하고, 생산에 필요한 자재를 구성합니다.',
    photo: 23,
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
    desc: '검수가 완료된 제품을 기준에 맞게 포장하고 출고 및 납품 절차를 진행합니다.',
    photo: 5,
  },
];

// 제작현황(현장 사진) 두 줄. site = src/assets/sites/site-번호.jpg
// factory = 사진에 마우스를 올리면 나오는 공장 · 작업실 이름 (사진 설명으로도 쓰임)
export const gallery = [
  [
    { site: 1, factory: '단동 지사 기술 패턴실' },
    { site: 4, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 12, factory: '동항 빈흥영 복장공장' },
    { site: 21, factory: '워싱공장' },
    { site: 3, factory: '단동 지사 샘플개발실' },
    { site: 13, factory: '동항 빈흥영 복장공장' },
    { site: 22, factory: '워싱공장' },
    { site: 6, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 20, factory: '동항 의성 복장공장' },
    { site: 28, factory: '월리 복장공장' },
    { site: 15, factory: '동항 빈흥영 복장공장' },
    { site: 29, factory: '월리 복장공장' },
    { site: 16, factory: '동항 빈흥영 복장공장' },
    { site: 30, factory: '월리 복장공장' },
    { site: 17, factory: '동항 빈흥영 복장공장' },
    { site: 31, factory: '월리 복장공장' },
  ],
  [
    { site: 2, factory: '단동 지사 샘플개발실' },
    { site: 11, factory: '단동 지사 운영지원팀 사무실' },
    { site: 18, factory: '동항 의성 복장공장' },
    { site: 32, factory: '월리 복장공장' },
    { site: 5, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 19, factory: '동항 의성 복장공장' },
    { site: 27, factory: '월리 복장공장' },
    { site: 14, factory: '동항 빈흥영 복장공장' },
    { site: 23, factory: '워싱공장' },
    { site: 7, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 24, factory: '워싱공장' },
    { site: 8, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 25, factory: '워싱공장' },
    { site: 9, factory: '단동 지사 샘플개발실 제2현장' },
    { site: 26, factory: '워싱공장' },
    { site: 10, factory: '단동 지사 샘플개발실 제2현장' },
  ],
];

// 본사·지사 지도. 스크롤하면 위에서부터 순서대로 지도가 이동하며 나라가 강조됩니다.
// code = 나라 번호(ISO 3166 숫자 코드). 한국 410, 중국 156, 베트남 704
// 첫 번째가 본사이고, 적힌 순서대로 선이 이어집니다. (본사 → 첫 지사 → 다음 지사)
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
      caption: ['견적부터 납품까지 전 과정을 관리하는', '옷본의 본사, 대한민국 입니다.'],
      cities: [{ name: '한국', side: 'right' }],
    },
    {
      code: 156, name: 'China', role: 'BRANCH 01', zoom: 2.6, region: 'CN-LN', // 중국 전체 말고 랴오닝성만
      caption: ['높은 완성도의 고품질 생산을 맡는', '옷본의 중국 단동 지사 입니다.'],
      cities: [{ name: '단동', sub: '랴오닝성', pin: [124.39, 40.13], side: 'left' }],
    },
    {
      code: 704, name: 'Vietnam', role: 'BRANCH 02', zoom: 7, region: 'VN-54', // 베트남 전체 말고 박지앙성만
      caption: ['균일한 품질과 안정적인 대량 생산을 담당하는', '옷본의 베트남 지사입니다.'],
      cities: [{ name: '박지앙', sub: '하노이', pin: [106.2, 21.27], side: 'left' }],
    },
  ],
};

// 지사 소개 페이지 (/branches). 메인 지도에서 나라를 누르면 이 페이지의 해당 나라로 바로 이동
// id = 주소 뒤에 붙는 이름 (/branches#china). 지도(network.offices)와 같은 순서로 적어 주세요.
// places = 그 지사의 시설 · 협력 공장. kind = 'office'(지사 시설) | 'factory'(협력 공장)
//   사진은 위 gallery 에서 factory 이름이 name 과 똑같은 사진을 자동으로 모아 보여줌
//   (사진이 없으면 크림색 빈 칸). 확인이 필요한 곳은 0000 으로 비워 두었습니다.
type Place = { name: string; kind: 'office' | 'factory'; desc: string };
// 지사 소개에서 빼는 현장 사진 번호 (src/assets/sites/site-번호.jpg). 비슷한 장면이 겹치는 사진
// 메인 화면 제작 현장 사진 줄에는 그대로 나옴
export const branchPhotoSkip = [10, 14, 18, 20, 22, 32];
export const branchesIntro = {
  eyebrow: 'GLOBAL NETWORK',
  title: '지사 소개',
  lead: '서울 본사를 중심으로 중국 단동, 베트남 박지앙 지사와 협력 공장이 함께 움직입니다.',
};
export const branches: { id: string; name: string; en: string; role: string; city: string; desc: string; places: Place[] }[] = [
  {
    id: 'korea', name: '한국 본사', en: 'Korea', role: 'HEADQUARTERS', city: '서울 성북구',
    desc: '견적 상담부터 생산 일정, 품질, 납품까지 전 과정을 관리하는 옷본의 본사입니다.',
    places: [
      { name: '서울 본사', kind: 'office', desc: '견적 상담 · 생산 관리 · 납품' },
    ],
  },
  {
    id: 'china', name: '중국 단동 지사', en: 'China', role: 'BRANCH 01', city: '랴오닝성 단동',
    desc: '패턴실과 샘플개발실을 직접 운영하며, 인근 협력 봉제 · 워싱 공장과 함께 높은 완성도의 고품질 생산을 맡습니다.',
    places: [
      { name: '단동 지사 기술 패턴실', kind: 'office', desc: '패턴 설계 · 그레이딩' },
      { name: '단동 지사 샘플개발실', kind: 'office', desc: '샘플 제작 · 수정 보완' },
      { name: '단동 지사 샘플개발실 제2현장', kind: 'office', desc: '샘플 제작' },
      { name: '단동 지사 운영지원팀 사무실', kind: 'office', desc: '일정 · 자재 · 출고 관리' },
      { name: '동항 빈흥영 복장공장', kind: 'factory', desc: '재단 · 봉제' },
      { name: '동항 의성 복장공장', kind: 'factory', desc: '재단 · 봉제' },
      { name: '월리 복장공장', kind: 'factory', desc: '재단 · 봉제' },
      { name: '워싱공장', kind: 'factory', desc: '워싱 · 후가공' },
    ],
  },
  {
    id: 'vietnam', name: '베트남 박지앙 지사', en: 'Vietnam', role: 'BRANCH 02', city: '하노이 박지앙',
    desc: '균일한 품질과 안정적인 대량 생산을 담당하는 옷본의 베트남 지사입니다.',
    places: [
      { name: '박지앙 지사', kind: 'office', desc: '0000' },
      { name: '0000 복장공장', kind: 'factory', desc: '0000' },
    ],
  },
];

// 브랜드 스토리 섹션 문구. icon = 카드 아이콘 종류 (thread 실뭉치 / globe 지구 / symbol 원형 심볼)
export const brandStory = {
  label: 'BRAND STORY',
  // CI 심볼 풀이 제목 아래 한 줄
  lead: 'OTBON의 로고는 이니셜 O와 B, 그리고 지구를 하나의 원 안에 담았습니다.',
  title: ['실 한 가닥에서 시작해', '세계를 잇습니다'],
  body: [
    'OTBON의 로고는 이니셜 O와 B, 그리고 지구를 하나의 원 안에 담았습니다. O의 원형 구조 안에 B의 형태를 배치하고, 실을 연상시키는 반복적인 수평선으로 의류 생산 브랜드의 정체성을 표현했습니다.',
    '원단의 결처럼 촘촘히 이어진 선은 한 벌의 옷이 완성되기까지의 정직한 과정을, 이 선을 감싼 둥근 지구는 국내를 넘어 세계로, 고객과 함께 넓혀가는 생산 네트워크를 의미합니다.',
    '간결한 기하학적 형태로 전문적이고 안정적인 브랜드 이미지를 전합니다.',
  ],
  cards: [
    { icon: 'thread', title: 'Thread · 실', desc: '실을 연상시키는 반복적인 수평선은 원단의 결처럼 촘촘히 이어져, 한 벌의 옷이 완성되기까지의 정직한 과정을 담았습니다.' },
    { icon: 'globe', title: 'Global · 세계', desc: '선을 감싼 둥근 지구는 국내를 넘어 세계로, 고객과 함께 넓혀가는 생산 네트워크를 의미합니다.' },
    { icon: 'symbol', title: 'OTBON', desc: 'O의 원형 구조 안에 B의 형태를 배치한 이니셜. 간결한 기하학적 형태로 전문적이고 안정적인 브랜드 이미지를 전합니다.' },
  ] as { icon: 'thread' | 'globe' | 'symbol'; title: string; desc: string }[],
};

// 함께한 브랜드 (메인). 적힌 순서대로 카드가 놓임 (PC 4칸씩)
// 사진은 public/images/partners/cards/브랜드이름.jpg (900×1200)
//   브랜드 이름을 소문자로, 띄어쓰기는 - 로 (예: '999 HUMANITY' → 999-humanity.jpg)
// logo = 브랜드 로고 이미지 (public 기준 경로, 비우면 없음), ratio = 로고 가로 ÷ 세로
export const partners: { name: string; logo: string; ratio?: number }[] = [
  { name: 'EASTLOGUE', logo: '/images/partners/eastlogue.jpg', ratio: 241 / 54 },
  { name: 'WHYTE', logo: '' },
  { name: 'ROUGH SIDE', logo: '' },
  { name: 'BEHEAVYER', logo: '/images/partners/beheavyer.png', ratio: 889 / 275 },
  { name: 'moif', logo: '' },
  { name: 'SPECTATOR', logo: '/images/partners/spectator.png', ratio: 1162 / 321 },
  { name: '999 HUMANITY', logo: '' },
  { name: 'SHIRTER', logo: '/images/partners/shirter.png', ratio: 878 / 104 },
];

// 제작 과정 (메인 화면 · 제작 기준, 다섯 칸)
// photo = src/assets/factory/factory-번호.jpg
export const processIntro = {
  title: '하나의 샘플을 완성하는 체계적인 다섯 단계',
  desc: '각 단계의 진행 사항을 면밀하게 확인하며 샘플 한 벌부터 완제품까지 완성도 높은 결과를 만들어갑니다.',
};
export const process = [
  {
    step: '01',
    en: 'Consultation',
    title: '대면 상담',
    photo: 34,
    desc: '브랜드의 제작 목적과 요구 사항을 상담을 통해 면밀히 파악하고, 제품의 디자인 사양과 원단, 부자재, 생산 조건 등을 구체적으로 협의합니다.',
  },
  {
    step: '02',
    en: 'Pattern Development',
    title: '패턴 개발',
    photo: 37,
    desc: '의뢰된 디자인과 제품 사양을 바탕으로 패턴을 설계합니다. 제품의 사이즈와 디테일, 봉제 방식 등을 고려해 완성도 높은 샘플 제작의 기초를 마련합니다.',
  },
  {
    step: '03',
    en: 'Cutting',
    title: '재단',
    photo: 38,
    desc: '원단의 특성과 결 방향을 고려해 재단을 진행합니다. 수축률과 원단 상태를 사전에 확인하여 패턴의 형태와 치수가 정확하게 구현되도록 합니다.',
  },
  {
    step: '04',
    en: 'Sample Making',
    title: '샘플 제작',
    photo: 17,
    desc: '개발된 패턴을 바탕으로 샘플을 제작합니다. 봉제 완성도와 마감 상태 등을 세밀하게 확인하고, 수정 및 보완 사항을 반영하여 최종 샘플을 완성합니다.',
  },
  {
    step: '05',
    en: 'Quality Control',
    title: '품질 검수',
    photo: 14,
    desc: '완성된 샘플의 세부 품질을 항목별로 꼼꼼하게 살핍니다. 지시 사양과 품질 기준에 부합하는지 확인하고, 보완이 필요한 부분을 최종 점검하여 샘플의 완성도를 높입니다.',
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

// 거래 안내 페이지 (/guide): 거래 조건 + 자주 묻는 질문(아래 faqs)
export const guide = {
  eyebrow: 'Terms & FAQ',
  title: '거래 안내',
  lead: '의뢰 전에 자주 확인하시는 거래 조건과 질문을 모았습니다. 더 궁금한 점은 견적 문의로 남겨 주세요.',
  termsEn: 'Terms',
  termsTitle: '거래 조건',
  terms: [
    { title: '샘플 · 패턴 개발비', desc: '샘플 · 패턴 개발비는 디자인 난이도에 따라 스타일별로 책정됩니다.' },
    { title: '세금계산서', desc: '세금계산서를 발행하며 사업자 지출 증빙을 지원합니다.' },
    { title: '불량 책임', desc: '출고 전 검품을 거치고도 불량이 발견되면 납품일로부터 1년간 수선을 책임지고 진행해 드립니다.' },
  ],
  faqEn: 'FAQ',
  faqTitle: '자주 묻는 질문',
};

// 자주 묻는 질문: 주제별 묶음. 묶음마다 영어 이름 · 한글 이름 · 한 줄 설명 · 질문(q)과 답(a)
// 답(a)이 비어 있는 질문도 다른 질문과 같은 모양으로 보이고, 눌러도 펼쳐질 글만 없음. 답을 채워 넣으면 펼쳐짐
export const faqGroups = [
  {
    en: 'Production',
    title: '제작 및 생산',
    desc: '기본 제작 조건과 생산 진행에 관한 질문',
    items: [
      { q: '최소 주문 수량은 어떻게 되나요?', a: '컬러당 최소 100장부터 제작 가능합니다. 정확한 생산 가능 수량은 제품 사양에 따라 상담을 통해 안내해 드립니다.' },
      { q: '제작 기간은 얼마나 걸리나요?', a: '샘플 확정 후 본 생산까지 약 8~12주가 소요됩니다. 제품 사양과 생산 일정에 따라 기간은 달라질 수 있습니다.' },
      { q: '여러 스타일을 동시에 진행할 수 있나요?', a: '네, 가능합니다. 여러 스타일을 동시에 진행할 수 있으며, 각 스타일의 사양과 일정에 맞춰 제작을 진행합니다.' },
      { q: '기존에 제작했던 제품을 동일하게 재현할 수 있나요?', a: '기존 제품을 기준으로 최대한 유사하게 재현할 수 있습니다. 원단과 부자재 등 제작 조건에 따라 차이가 있을 수 있으나, 약 95% 수준의 완성도를 목표로 구현합니다.' },
      { q: '생산 과정 중 진행 상황을 확인할 수 있나요?', a: '네, 가능합니다. 제작 진행 상황이 궁금하실 때 언제든 문의해 주시면 현재 진행 단계와 상황을 안내해 드립니다.' },
      { q: '제작 중 사양 변경이 가능한가요?', a: '샘플 제작 단계에서는 사양 변경이 가능합니다. 다만, 메인 생산에 투입된 이후에는 생산 일정과 공정상의 이유로 변경이 어려울 수 있습니다.' },
      { q: '납품은 어떻게 진행되나요?', a: '중국 현지에서 제품 출고 후 한국으로 운송되며, 국내 도착 이후 요청하신 물류지까지 안전하게 배송해 드립니다.' },
    ],
  },
  {
    en: 'Materials',
    title: '원부자재',
    desc: '원단 및 부자재 선택과 적용에 관한 질문',
    items: [
      { q: '동일한 원단을 구하기 어려운 경우 대체 원단을 제안받을 수 있나요?', a: '기존 원단과 100% 동일한 소재를 확보하기는 어려울 수 있으나, 유사한 특성과 질감을 가진 대체 원단을 찾아 제안해 드립니다.' },
      { q: '원하는 혼용률이나 중량의 원단을 확보할 수 있나요?', a: '원하시는 소재의 스와치를 전달해 주시면, 혼용률과 중량 등 요청하신 조건에 맞는 원단을 찾아드립니다.' },
      { q: '지퍼, 단추, 스냅 등 요청한 부자재를 별도로 소싱할 수 있나요?', a: '원하시는 부자재의 참고 이미지를 전달해 주시면, 유사한 디자인과 사양의 제품을 최대한 찾아 제안해 드립니다.' },
      { q: '원하는 컬러에 맞춰 원단 염색을 진행할 수 있나요?', a: '원단 자체 염색은 최소 진행 수량(MOQ)이 적용됩니다. 원하시는 컬러와 수량을 전달해 주시면 진행 가능 여부를 안내해 드립니다.' },
      { q: '워싱이나 후가공을 별도로 요청할 수 있나요?', a: '네, 가능합니다. 가먼트 다잉, 바이오 워싱 등 다양한 워싱 및 후가공 경험을 바탕으로 원하는 색감과 질감을 구현합니다. 요청하신 가공 사양에 따라 적용 가능 여부와 세부 조건을 안내해 드립니다.' },
    ],
  },
  {
    en: 'Pattern & Sample',
    title: '패턴 및 샘플',
    desc: '패턴 개발과 샘플 제작에 관한 질문',
    items: [
      { q: '기존 패턴을 활용해 다른 디자인으로 변경할 수 있나요?', a: '네, 가능합니다. 변경을 원하는 디자인과 세부 사양을 작업지시서 또는 샘플에 표시해 전달해 주시면, 해당 내용을 바탕으로 패턴을 수정할 수 있습니다.' },
      { q: '사이즈별 패턴 그레이딩도 가능한가요?', a: '네, 가능합니다. 기준 사이즈와 사이즈별 그레이딩 편차를 전달해 주시면, 요청하신 치수에 맞춰 패턴 그레이딩을 진행합니다.' },
      { q: '샘플 확정 후 패턴을 전달받을 수 있나요?', a: '네, 가능합니다. 최종 확정된 샘플을 기준으로 패턴을 정리하여 전달해 드립니다.' },
    ],
  },
];

// 회사소개 > 기업개요 페이지 (/about). 모르는 연도는 '0000' 으로 두었으니 확인되면 바꿔 주세요.
export const overview = {
  eyebrow: 'Company Overview',
  title: ['옷의 본(本)을 세우는', '의류 제작 기업, 옷본'],
  lead: [
    '옷본은 0000년 **마리**로 사업의 시작을 알렸습니다.',
    '이후 0000년 **엠제이컴퍼니**로, 0000년 지금의 **옷본(OTBON)**으로 이름을 바꾸며 한 벌의 옷이 완성되기까지의 모든 과정을 책임지는 의류 제작 기업으로 성장해 왔습니다.',
  ],
  historyTitle: '마리에서 옷본까지',
  // 이름이 바뀌어 온 과정 (위에서부터 순서대로, 마지막이 지금 이름)
  history: [
    { year: '0000', name: '마리', en: 'MARI', desc: '의류 제작 사업의 시작' },
    { year: '0000', name: '엠제이컴퍼니', en: 'MJ COMPANY', desc: '생산 범위와 협력 네트워크 확대' },
    { year: '0000', name: '옷본', en: 'OTBON', desc: '옷의 본(本)을 세우는 브랜드로 새 출발' },
  ],
  sections: [
    {
      en: 'Global Production',
      title: '국내와 해외를 잇는 생산 네트워크',
      body: '서울 본사를 중심으로 중국 단동, 베트남 박지앙 지사를 운영하고 있습니다. 지사에서는 패턴실과 샘플개발실, 협력 봉제 · 워싱 공장이 함께 움직이며, 샘플 제작부터 납품까지 일정과 품질을 직접 관리합니다. 2026년 기준 협력 공장 14곳과 함께하고 있습니다.',
    },
    {
      en: 'Management Philosophy',
      title: '기본에 충실한 생산, 신뢰로 이어지는 관계',
      body: '옷본은 정직한 생산, 책임 있는 품질, 오래 가는 파트너십을 경영의 기본으로 삼습니다.\n세심한 제작과 품질 관리를 바탕으로, 협력 브랜드가 믿고 맡길 수 있는 제작 파트너가 되기 위해 한 걸음씩 나아가고 있습니다.',
    },
  ],
  values: [
    { title: '정직한 생산', en: 'Honesty', desc: '합의된 사양과 일정을 바탕으로 책임감 있게 생산을 진행합니다.' },
    { title: '책임 있는 품질', en: 'Quality', desc: '공정마다 확인하고, 끝까지 책임집니다.' },
    { title: '오래 가는 파트너십', en: 'Partnership', desc: '한 번의 생산을 넘어 지속적인 협력 관계를 만들어갑니다.' },
  ],
};

// 제작 기준 페이지 (/standards). 순서: 제작 과정(process) → 견적 기준 → 상담 준비 자료
// 금액 · 퍼센트 · 검품 횟수처럼 확인이 필요한 곳은 0000 / 00 으로 비워 두었습니다.
export const standards = {
  eyebrow: 'Production Standards',
  title: ['제작 기준'],
  lead: '의뢰 전 확인하실 수 있도록 옷본의 제작 과정과 견적 기준, 준비 자료를 정리했습니다.',

  quote: {
    en: 'Quotation',
    title: '견적이 정해지는 기준',
    desc: '정해진 단가표 대신 아래 네 가지 항목으로 견적을 산출합니다.\n같은 품목이라도 원단과 사양에 따라 단가가 상이할 수 있습니다.',
    items: [
      { title: '수량', desc: '스타일별 수량과 색상 · 사이즈 구성. 총수량이 같더라도 옵션 구성에 따라 생산 단가가 달라질 수 있습니다.' },
      { title: '원단 · 부자재', desc: '원부자재는 옷본 수배 또는 고객사 사급 중 지정 가능하며, 동일 사양 기준 단가 경쟁력을 갖춘 소싱처가 있을 경우 별도로 제안해 드립니다.' },
      { title: '디자인', desc: '봉제 공정과 봉제 사양, 부자재 · 안감 · 충전재 유무 등 추가되는 공정에 따라 견적가에 반영됩니다.' },
      { title: '납기', desc: '희망 입고일과 시즌 일정. 정해진 날짜가 있다면 견적 단계에서 함께 알려 주세요. 협의를 통해 가능한 일정을 검토하고 조율해 드립니다.' },
    ],
  },

  prepare: {
    en: 'Before Consulting',
    title: '견적 상담 전 준비 자료',
    desc: '모든 항목을 다 작성하지 않으셔도 괜찮습니다. 준비된 내용을 바탕으로 전달해 주시면 상담을 통해 세부 사항을 함께 정리해 드립니다.',
    // field = 견적 문의 양식의 칸 이름 (체크하고 적은 내용이 그 칸에 그대로 들어감), ph = 입력칸 안내 글씨
    items: [
      { title: '브랜드', field: '업체명 / 성함', ph: '브랜드명 또는 회사명', desc: '브랜드 소개와 판매 채널을 바탕으로 브랜드에 적합한 생산 방향을 함께 모색합니다.' },
      { title: '품목 · 참고 샘플', field: '품목', ph: '', desc: '품목명과 함께 참고하실 샘플이나 이미지를 전달해 주세요.' },
      { title: '스타일당 목표 수량', field: '예상 수량', ph: '예: 스타일당 300장', desc: '스타일별 목표 수량은 작업지시서와 함께 준비해 주세요.' },
      { title: '희망 납기', field: '희망 납기', ph: '예: 9월 말 입고', desc: '입고 희망일을 알려 주시면 생산 일정을 보다 효율적으로 계획할 수 있습니다.' },
    ],
  },
};
