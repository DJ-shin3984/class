import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";
import { IMutation, IMutationUploadFileArgs } from "../../../src/commons/types/generated/type";

const createBoard = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`;

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const ImageUploadPage = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File>()

  const [createBrd] = useMutation(createBoard)
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onClickSubmit = async (): Promise<void> => {
    // 1. uploadFile 
    const resultFile = await uploadFile({ variables: {file}})
    const url = resultFile.data?.uploadFile.url
    //  2. createBoard
    const result = await createBrd({
      variables:{
        createBoardInput: {
          writer: "철1",
          password: "1234",
          title: "제목1",
          contents: "내용1",
          images: [url]
        }
      }
    })
  }

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>, ): Promise<void> => {
    const itemFile = event.target.files?.[0]; // 배열로 들어오는 이유 multiple 일 때 파일 다수 선택 가능
    if(itemFile === undefined) return
    console.log(itemFile);

    // const resultData = await uploadFile({ variables: {file: itemFile,},});
    // console.log(resultData.data?.uploadFile.url);
    // setImageUrl(resultData.data?.uploadFile.url ?? "");

    // 1. 임시 URL 생성 => (가짜 URL - 로컬에서만 접근 가능)
    const resultURL = URL.createObjectURL(itemFile)
    console.log(resultURL)
    // 2. 임시 URL 생성 => (진짜 URL - 다른 브라우저에서도 접근 가능)
    const fileReader = new FileReader()
    fileReader.readAsDataURL(itemFile)
    fileReader.onload= (event) => {
      console.log(event.target?.result) // 게시판에서 event.target.id 를 쓰면 eslint가 잡았던 이유: event.target은 태그만을 가르키는게 아님
      if(typeof event.target?.result === "string"){
        setImageUrl(event.target?.result)
        setFile(itemFile)
      }
    }
  };

  return (
    <>
      <div>
        <input type="file" onChange={wrapAsync(onChangeFile)} multiple={true} />
        <br />
        <img src={imageUrl}></img>
        {/* <img src={`https://storage.googleapis.com/${imageUrl}`} width={"200px"} height={"200px"}/> */}
      </div>
      <button onClick={onClickSubmit}>게시글 등록</button>
    </>
  );
};

export default ImageUploadPage;
