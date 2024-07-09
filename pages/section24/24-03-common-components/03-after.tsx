import { useForm } from 'react-hook-form'
import { wrapFormAsync } from '../../../src/commons/libraries/asyncFunc'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from './after.validation'
import Input01 from '../../../src/components/commons/inputs/01'
import Button01 from '../../../src/components/commons/buttons/01'
import DivErr01 from '../../../src/components/commons/div_err/01'

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
      작성자: <Input01 type='text' register={register('writer')}/>
      <DivErr01 formState={formState.errors.writer?.message} />
      제목: <Input01 type='text' register={register('title')}/>
      <DivErr01 formState={formState.errors.title?.message} />
      내용: <Input01 type='text' register={register('contents')}/>
      <DivErr01 formState={formState.errors.title?.contents} />
      {/* 주소: <input type='text' {...register('boardAddress.addressDetail')} /> */}
      <Button01 title='등록하기' isActive={formState.isValid} />
    </form>
  )
}
/*
  <button type="reset">지워줌</button>
  <button type="submit">form 태그의 함수 실행해줌</button> button의 type default 값은 submit
  <button type="button">default 값 submit 말고 원하는 함수 실행</button>
*/
