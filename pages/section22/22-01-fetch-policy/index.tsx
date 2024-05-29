import { useRouter } from 'next/router'
import { useState } from 'react'
import FetchPolicyExample from '../../../src/components/units/22-fetch-policy'

export default function StaticRoutedPage (): JSX.Element {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  // 1. 새로운 컴포넌트 등장시에도 글 유지되는지?
  const onClickIsOpen = (): void => {
    setIsOpen(true)
  }

  // 2. 새로운 페이지 이동시에도 글로벌 스테이트 값이 유지되는지?
  const onClickMove = (): void => {
    router.push('/section22/22-01-fetch-policy-moved').catch(console.error)
  }

  return (
    <div>
      <button onClick={onClickIsOpen}>create new component</button>
      {isOpen && <FetchPolicyExample />}
      *****************************************************
      <button onClick={onClickMove}> move page</button>
    </div>
  )
}
