import { useForm } from 'react-hook-form'
import { wrapFormAsync } from '../../../src/commons/libraries/asyncFunc'

interface IFormData {
  writer: string
  title: string
  contents: string
  boardAddress: {
    addressDetail: string
  }
}

export default function AfterGraphqlMutationPage (): JSX.Element {
  const { register, handleSubmit } = useForm<IFormData>()

  const onClickSubmit = (data: IFormData): void => {
    console.log(data)
  }

  console.log('리랜더링 되나?')

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
      작성자: <input type='text' {...register('writer')} />
      제목: <input type='text' {...register('title')} />
      내용: <input type='text' {...register('contents')} />
      주소: <input type='text' {...register('boardAddress.addressDetail')} />
      <button>GRAPHQL-API 요청하기</button>
    </form>
  )
}
/* 
  <button type="reset">지워줌</button>
  <button type="submit">form 태그의 함수 실행해줌</button> button의 type default 값은 submit
  <button type="button">default 값 submit 말고 원하는 함수 실행</button>
*/