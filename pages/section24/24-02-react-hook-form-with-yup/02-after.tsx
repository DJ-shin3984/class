import { useForm } from 'react-hook-form'
import { wrapFormAsync } from '../../../src/commons/libraries/asyncFunc'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from './after.validation'

interface IFormData {
  writer: string
  title: string
  contents: string
  // boardAddress: {
  //   addressDetail: string
  // }
}

export default function AfterGraphqlMutationPage (): JSX.Element {
  const { register, handleSubmit, formState } = useForm<IFormData>({
    resolver: yupResolver(validation),
    // mode: 'onChange' // 어떤 event 발생시 적용할건지
    mode: 'onBlur' // 어떤 event 발생시 적용할건지
  })

  const onClickSubmit = (data: IFormData): void => {
    console.log(data)
  }

  console.log('리랜더링 되나?')

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type='text' {...register('writer')} />
      <div style={{ color: 'red' }}>{formState.errors.writer?.message}</div>
      제목: <input type='text' {...register('title')} />
      <div style={{ color: 'red' }}>{formState.errors.title?.message}</div>
      내용: <input type='text' {...register('contents')} />
      <div style={{ color: 'red' }}>{formState.errors.contents?.message}</div>
      {/* 주소: <input type='text' {...register('boardAddress.addressDetail')} /> */}
      <button style={{backgroundColor: formState.isValid ? 'green' : '' }}>GRAPHQL-API 요청하기</button>
    </form>
  )
}
/*
  <button type="reset">지워줌</button>
  <button type="submit">form 태그의 함수 실행해줌</button> button의 type default 값은 submit
  <button type="button">default 값 submit 말고 원하는 함수 실행</button>
*/
