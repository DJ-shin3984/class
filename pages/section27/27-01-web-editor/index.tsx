// import ReactQuill from "react-quill"
import dynamic from "next/dynamic"
import { FormEvent, useEffect } from "react"
import 'react-quill/dist/quill.snow.css'
import { wrapFormAsync } from "../../../src/commons/libraries/asyncFunc"
// import { Modal } from "antd"

const ReactQuill = dynamic( async () => await import('react-quill'), { ssr: false } )

export default function WebEditorPage() {

  // reactQuill 만든 사람들이 만든 onChange로 event 를 값으로 하지 않는다.
  const onCangecontens = (value: string): void => {
    console.log(value)
  }

  // useEffect(() => {
  //   async function modalCodeSplitting (): Promise<void> {
  //     const { Modal } = await import("antd") // code splitting
  //     Modal.success({content: "게시글 등록 success"})
  //   }
  //   void modalCodeSplitting()
  // },[])

  // const onClickSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
  //   event.preventDefault()
  //   Modal.success({content: "게시글 등록 success"})
  const onClickSubmit = async (): Promise<void> => {
    const { Modal } = await import("antd") // code splitting
    Modal.success({content: "게시글 등록 success"})
  }

  return (
    // <form onSubmit={onClickSubmit}>
    <form onSubmit={wrapFormAsync(onClickSubmit)}>
      writer: <input type="text"/><br/>
      password: <input type="password"/><br/>
      title: <input type="text"/><br/>
      content: <ReactQuill onChange={onCangecontens}/>
      {/* contents: {" "}{process.browser ? <ReactQuill onChange={onCangecontens}/> : <div/>} */}
      {/* {typeof window !== undefined ? <ReactQuill onChange={onCangecontens}/> : <div/>} */}
      <button>submit</button>
    </form>
  )
}