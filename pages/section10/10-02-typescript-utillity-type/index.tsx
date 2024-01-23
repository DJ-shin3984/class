interface IProfile {
    name: string
    age: string
    school: string
    hobby?: string
}

// 1. Partial 타입
type aaa = Partial<IProfile>
/* 
    위의 Partial 타입의 객체 속성을 보면 interface IProfile 객체가
    name?: string
    age?: string
    school?: string
    hobby?: string
    과 같이 전부 ? 가 붙은걸 알수 있다.
    동일 객체를 빈값허용을 사용하기위해 IProfile2 이런식으로 만드는 불필요함을 없애기 위함
*/

// 2. Required 타입
type bbb = Required<IProfile>
/* 
    위의 Partial 타입의 객체 속성을 보면 interface IProfile 객체가
    name: string
    age: string
    school: string
    hobby: string
    과 같이 전부 필수 입력값이 된것 을 붙은걸 알수 있다.
    Partial 타입과 정 반대 되는 타입
*/

// 3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">
/* 
    원하는것만 선택하여 만들 수 있다.
*/

// 4. Omit 타입
type ddd = Omit<IProfile, "school">
/* 
    원하는 것만 제외하여 만들 수 있다.
*/

// 5. Union 타입
type eee = "철수" | "영희" | "훈이" // Union 타입
let child1: eee = "영희" // 해당 타입은 eee에 속해있는 데이터만 사용가능

type fff = keyof IProfile   

// 6. Record 타입
type ggg = Record<eee, IProfile>
/* 
    key: interface 형식으로 만들수 있음
*/

// 7 type 과 interface 의 차이
/* 
    interface는 선언 병합 가능
    기존의 IProfile 객체가 있는상태에서
    expoty interface IProfile{ candy: number} 선언시 candy 항목이 추가된다.
*/

