import axios from "axios"

export default function OpenGraphDevPage() {
  const onClickEnter = async(): Promise<void> => {
    // 1.채팅데이터에 주소가 있는지 찾기(ex, http ~~ 를 포함하는 문자열)

    // 2. 해당 주소를 스크래핑 하기
    const result = await axios.get("http://localhost:3000/section32/32-01-opengraph-provider") // CORS: naver는 허용 안되있음
    // console.log(`axios result: ${result.data}`)
    
    // 3. meta tag 오픈그래프(og:) 찾기
    console.log(result.data?.split("<meta").filter((el: string) => el.includes("og:")))
  }
  return(
    <>
      <button onClick={onClickEnter}>채팅 입력후 엔터치기</button>
    </>
  )
}