import { useState } from 'react'

export default function GraphqlMutationPage(){
  const [writer, setWriter] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()


  const onClickSubmit = async (data) => {
    console.log(data)
  }

  const onChangeWriter = (event) => {
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const onChangeContents = (event) => {
    setContents(event.target.value)
  }

  console.log('리랜더링 되나?')

  return (
    <div>
      작성자: <input type='text' onChange={onChangeWriter} />
      제목: <input type='text' onChange={onChangeTitle} />
      내용: <input type='text' onChange={onChangeContents} />
      <button type='button' onClick={onClickSubmit}>api 요청</button>
    </div>
  )

}