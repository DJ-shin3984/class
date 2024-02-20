import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { useState } from "react";
import { checkValidationFile } from "../../../src/commons/libraries/validationFile";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/type";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const ImageUploadPage = (): JSX.Element => {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const itemFile = event.target.files?.[0]; // 배열로 들어오는 이유 multiple 일 때 파일 다수 선택 가능
    console.log(itemFile);

    if (!checkValidationFile(itemFile)) return;

    const resultData = await uploadFile({
      variables: {
        file: itemFile,
      },
    });

    console.log(resultData.data?.uploadFile.url);
    setImageUrl(resultData.data?.uploadFile.url ?? "");
  };

  const onClickImg = (): void => {
    // document.getElementById("파일태그ID")?.click(); // 이건 react 가 아닌 js
    console.log(`fileRef.current: ${fileRef.current}`);
    fileRef.current?.click();
  };

  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickImg}
      >
        이미지선택
      </div>
      <input
        type="file"
        onChange={onChangeFile}
        multiple={true}
        style={{ display: "none" }}
        ref={fileRef}
        // accept="image/png"
      />
      <br />
      <img
        src={`https://storage.googleapis.com/${imageUrl}`}
        width={"200px"}
        height={"200px"}
      />
    </div>
  );
};

export default ImageUploadPage;
