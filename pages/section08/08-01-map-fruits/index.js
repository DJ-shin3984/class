// 컴포넌트 위에 만든 이유는 : 컴포넌트가 리렌더링 하더라도 다시 안만들어짐 (자원의 효율성)
const FRUITS = [
  { number: 1, title: "샤인머스켓" },
  { number: 2, title: "청포도" },
  { number: 3, title: "레드향" },
  { number: 4, title: "천예향" },
  { number: 5, title: "오렌지" },
];
export default function MapFruitsPage() {
  const aaa = [
    <div>1. 샤인머스켓</div>,
    <div>2. 청포도</div>,
    <div>3. 레드향</div>,
    <div>4. 천예향</div>,
    <div>5. 오렌지</div>,
  ];
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return(
    <div>
      <div>{bbb}</div>; 
      =================
      <div>{aaa}</div>;
      =================
      <div>
        {/* 3. 실무 효율적인 렌더링 예제 */}
        {FRUITS.map(el => <div>{el.number} {el.title} </div>)}
      </div>
    </div>
  )
}
