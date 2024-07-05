import { gql, useMutation } from '@apollo/client'
import { useState } from 'react'
import { wrapAsync } from '../../../src/commons/libraries/asyncFunc'

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage(): JSX.Element {
  const [createProduct] = useMutation(CREATE_PRODUCT)

  const onClickSubmit = async (): Promise<void> => {
    const result = await createProduct()
    console.log(result)
  }

  return (
    <>
      <button onClick={wrapAsync(onClickSubmit)}>CALL GRAPHQL-API (sync)</button>
      {/*
        - eslint 에서 에러로 표시하는 원인은 typesciprt 에서 async 를 호출하는 함수의경우 바인딩이 되지않아 발생
        eslint.js 에서 에러를 무시하는 속성 추가 = 약식
        정석대로 한다면 해당 무시하는 속성 저장을 삭제 후 (rules)
        그렇다면 hof 을 사용해서 비동기함수를 실행시키는 함수를 onClick 에서 실행
        해당 비동기 함수를 실행하는 함수는 매번 작성할 수 없으니 전역으로 올림

        어떤 선택이든 상관없다 eslint 를 무시하는 rule로 하던가 아니면 위 방법처럼 하던가
       */}
    </>
  )
}
