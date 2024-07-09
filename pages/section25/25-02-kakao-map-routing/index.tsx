import Link from "next/link"
import { useRouter } from "next/router"

export default function KakaoMapPage(): JSX.Element {
  const router = useRouter()
  const onClickMapPageMove = () => {
    router.push("/section25/25-02-kakao-map-routing-moved")
  }
  
  return(
    <>
      {/* 
      <button onClick={onClickMapPageMove}>지도페이지 이동하기</button>
     */}  
      {/* MPA 방식으로 reate / Next.js 사용하는 의미가 없다.
      <a href="/section25/25-02-kakao-map-routing-moved"></a>
       */}
      {/*  
       <Link href="/section25/25-02-kakao-map-routing-moved">
        페이지 이동하기
      </Link>
       */}
       {/* next에서 제공하는 a태그로 SPA 활용 가능 + <a>사용으로 검색 좋아짐 */}
      <Link href="/section25/25-02-kakao-map-routing-moved">
        <a>페이지 이동하기</a>
      </Link>
    </>
  )
}