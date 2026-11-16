// 클래스 이름 여러 개를 하나로 합침 (빈 값은 빼고). shadcn 부품들이 쓰는 cn 함수
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
