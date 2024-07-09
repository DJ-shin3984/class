import { useEffect } from "react"

declare const window: typeof globalThis & {
  kakao: any
}

export default function KakaoMapPage(): JSX.Element {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=b2c3d16215aef3541f15fa58c5c02eca"
    document.head.appendChild(script)
    script.onload = () => {
      window.kakao.maps.load(() =>{
        const container = document.getElementById('map') //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3 //지도의 레벨(확대, 축소 정도)
        }
        let map = new window.kakao.maps.Map(container, options) //지도 생성 및 객체 리턴
        
        const marker = new window.kakao.maps.Marker({ 
          // 지도 중심좌표에 마커를 생성합니다 
          position: map.getCenter() 
        }) 
        // 지도에 마커를 표시합니다
        marker.setMap(map)
        
        // 지도에 클릭 이벤트를 등록합니다
        // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
        window.kakao.maps.event.addListener(map, 'click', (mouseEvent) => {        
            // 클릭한 위도, 경도 정보를 가져옵니다 
            let latlng = mouseEvent.latLng
            // 마커 위치를 클릭한 위치로 옮깁니다
            marker.setPosition(latlng)
            let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, '
            message += '경도는 ' + latlng.getLng() + ' 입니다'
            let resultDiv = document.getElementById('clickLatlng') 
            resultDiv.innerHTML = message
        })
      
      })
    }
  },[])
  
  
  return(
    <>
      {/* <script type='text/javascript' src='></script> */}
      <div id='map' style={{width:500, height:400}}></div>
      <p><em>지도를 클릭해주세요!</em></p> 
      <div id="clickLatlng"></div>
    </>
  )
}