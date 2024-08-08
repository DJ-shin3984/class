import { DiffFilled } from "@ant-design/icons"
import { Observable, fromPromise } from "@apollo/client"
import { from } from "zen-observable"

export default function ObservableFlatmapPage() {
  const onClickButton = (): void => {
    // new Promise((resolve, reject) => {})
    // new Observable((observer) => {})
    
    //예시가 string이여서 from 을 사용 promise 였다면 fromPromise 사용
    from(["1번 useQuery", "2번 useQuery", "3번 useQuery"])
    .flatMap((el) => from([`${el} 결과에 qqq적용`, `${el} 결과에 zzz 적용`]))
    .subscribe(el => console.log(el)) // subscribe 는 실행하는 함수
    // fromPromise()
  }

  return(
  <>
    <button onClick={onClickButton}>클릭</button>
  </>
  )
}