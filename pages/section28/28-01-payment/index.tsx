import * as PortOne from "@portone/browser-sdk/v2";

export default function PaymentPage(): JSX.Element {
  const onClickPayment = async (): Promise<void> =>{
    const response = await PortOne.requestPayment({
      // Store ID 설정
      storeId: "store-407c84fd-769d-46d5-9797-072ea815dc2e",
      // 채널 키 설정
      channelKey: "channel-key-09e5d038-59a8-4c6e-ad57-96035e415d65",
      paymentId: `DJStor-payment-${crypto.randomUUID()}`,
      orderName: "나이키 와플 트레이너 2 SD",
      totalAmount: 10,
      currency: "CURRENCY_KRW",
      payMethod: "EASY_PAY",
      redirectUrl: "http://localhost:3000/section28/28-01-payment", // 모바일 환경에서는 결제시 새창으로 replace 되어버림 결제완료후 돌아올 페이지
    });
    console.log("!@# : "+JSON.stringify(response))
  }
  return (
    <>
      <button onClick={onClickPayment}>결제하기</button>
    </>
  )
}
