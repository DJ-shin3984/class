import { useRouter } from "next/router";

export default function StaticRouting() {
  const router = useRouter();

  const onClickMove = (e) => {
    let pageIdx = e.target.dataset.pageIdx;
    router.push("/05-02-static-routed/" + pageIdx);
  };
  return (
    <>
      <button onClick={onClickMove} data-page-idx="18867">
        page 이동
      </button>
      <br />
      {/* react 에서는 a태그 href 에서 javascript:void(0) 사용시 warning 발생 ↓
        react_devtools_backend.js:4045 Warning: A future version of React will block 
        javascript: URLs as a security precaution. Use event handlers instead if you can. 
        If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. 
        React was passed "javascript:void(0);".
      */}
      {/* 
      <a href="#" onClick={onClickMove} data-page-idx="18867">
        게시글 18867
      </a>
       */}
    </>
  );
}
