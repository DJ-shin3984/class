import { stringify } from "querystring"

export default function TypescriptPage() {
    /* 
        typescript 의경우는 기본 문법이 변수명: 데이터타입 = 실제 입력값 이다.
        하지만 위에 사용된 내용을 보면 데이터 타입을 선언하지 않았는데 에러를 확인할수 있다.
        typescript 는 타입 추론이라고 하는 js 에서 적용되던 가장 최초의 값을 통해 데이터타입을 설정하는 기능을 가져와서 사용한다.
    */
    let aaa = "안녕하세요"
    aaa = 3

    let bbb: string = "hello"
    bbb = "hell"

    /* 
        타입 명시(타입추론)가 그러면 필요가 없는가?
        아니다 타입명시가 필요한 상황이 온다.
        아래의 상황은 숫자 또는 문자열 이 동시에 써야하는 순간이 있다. 이럴경우는 2개의 형식을 허용하도록 타입추론을 해줘야한다.
    */
    let ccc: number | string = 1000
    ccc = "1000원"

    /* 
        불린 타입이 중요하다.
        typescript 를 사용하는 이유
        간혹 문자열 "false"로 응답오는 경우가 있기 때문 이럴때 ts는 더욱 필요하다
     */
    let ddd: boolean = true
    ddd = false
    
    /* 
        배열 타입의 경우 데이터 타입 명시 안할경우 문자와 숫자등이 혼합된다면 타입추론으로 number |string 등으로 자동 설정된다.
    */
   let eee: number[] = [1,2,3,4,5]
   let fff = [1,2,3,"철수","영희"]
   
    /* 
       객체 타입또한 배열처럼 혼합하여 사용할경우 타입추론으로 자동 설정되지만.
       타입명시가 필요한 경우 Interface 를 사용하여 형식을 지정해주면 된다.
       추가로 아래의 interface 를 볼경우 hobby 에 ? 가 붙는것을 볼수있는데
       해당 내용은 const profile 의 최초 할당 값에는 hobby가 없다 이후 profile.hobby를 통해 값을 추가할때
       이런경우에 사용되는 방식으로 최초 할당할때 없어도 추후에 수정 가능 된다고 보면 된다.
       DB로 치면 null 허용 이라고 보면 될듯
    */
    interface IProfile {
        name: string
        age: number | string
        school: string
        hobby?: string
    }

    const profile: IProfile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.age = "8살"
    profile.hobby = "달리기"

    /*
        함수 타입에서는 parameter(매개변수) 에서 타입 명시를 해줘야한다.
        argument(전달인자)는 형식에 맞춰 잘 보내면된다. (이부분은 java 로 이미 경험한거라... 어렵지는 않음)
    */
    function add(num1: number, num2: number, unit:string){
        return num1 + num2 + unit
    }

    add(1000,2000,"원")


    /* 
        any타입 (사실상 javascript 이다.) 가급적 자제해야함 무슨 타입을 써야할지 모를때
        전부 허용하는 타입
    */
    let zzz: any = "철수"
    zzz = 123
    zzz = true
    zzz = "abc"


    return (
        ''
    )
}