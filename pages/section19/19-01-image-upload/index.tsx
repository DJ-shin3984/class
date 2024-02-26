import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
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

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>,
  ): Promise<void> => {
    const itemFile = event.target.files?.[0]; // 배열로 들어오는 이유 multiple 일 때 파일 다수 선택 가능
    console.log(itemFile);

    const resultData = await uploadFile({
      variables: {
        file: itemFile,
      },
    });

    console.log(resultData.data?.uploadFile.url);
    setImageUrl(resultData.data?.uploadFile.url ?? "");
  };

  return (
    <div>
      <input type="file" onChange={onChangeFile} multiple={true} />
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
