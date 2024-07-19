import dynamic from "next/dynamic"
import 'react-quill/dist/quill.snow.css'
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc"
import { useForm } from "react-hook-form"

const ReactQuill = dynamic( async () => await import('react-quill'), { ssr: false } )

export default function WebEditorPage() {
  const {register, setValue, trigger, getValues} = useForm({
    mode: "onChange"
  })

  const onCangecontens = (value: string): void => {
    console.log(value)

    // register 로 등록하는것이 아닌 강제로 값을 넣어준다.
    setValue('content', value === "<p><br></p>" ? "" : value)
    // onChange 됐으니까 에러검증 해달라고 react-hook-form 전달하는 트리거
    void trigger('content')
    // console.log(getValues())
  }

  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd") // code splitting
    Modal.success({content: "게시글 등록 success"})
  }

  return (
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      writer: <input type="text" {...register('writer')}/>
      <br/>
      password: <input type="password" {...register('password')} />
      <br/>
      title: <input type="text" {...register('title')} />
      <br/>
      content: <ReactQuill onChange={onCangecontens}/>
      <button>submit</button>
    </form>
  )
}