import dynamic from "next/dynamic"
import 'react-quill/dist/quill.snow.css'
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc"
import { useForm } from "react-hook-form"
import { gql, useMutation } from "@apollo/client"
import { useRouter } from "next/router"

const ReactQuill = dynamic( async () => await import('react-quill'), { ssr: false } )

const MY_GQL_SET = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
      writer
      title
      contents
    }
  }
`

export default function WebEditorPage() {
  const router = useRouter();
  const [myFunction] = useMutation(MY_GQL_SET)

  const {register, setValue, trigger, handleSubmit} = useForm({
    mode: "onChange"
  })

  const onCangecontens = (value: string): void => {
    setValue('content', value === "<p><br></p>" ? "" : value)
    void trigger('content')
  }

  const onClickSubmit = async (data: any): Promise<void> => {
    const result = await myFunction({
      variables: {
        createBoardInput: {
          writer: data.writer,
          password: data.password,
          title: data.title,
          contents: data.content,
        },
      },
    })

    const { Modal } = await import("antd") // code splitting
    console.log(`!!! ${data.content}`)
    Modal.success({content: "게시글 등록 success"})

    const boardId = result.data.createBoard._id
    router.push(`/section27/27-03-web-editor-xss-detail/${boardId}`)
  }

  return (
    <form onSubmit={wrapFormAsync(handleSubmit(onClickSubmit))}>
    {/* <form onSubmit={wrapFormAsync(onClickSubmit)}> */}
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