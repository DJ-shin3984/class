import { useState } from "react";
import { CheckErr, PassDiv, inputEye } from "../../styles/emotion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
export default function signupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passErr, setPassErr] = useState("");
  const [pwType, setPwType] = useState("password");
  const [pwTxt, setPwTxt] = useState("show");

  const onChangeEmail = (event) => {
    /*  이건 출력됨...
    let test_b = event.target.value;
    alert(test_b) 
    */
    setEmail(event.target.value);
    let regExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    !event.target.value.match(regExp)
      ? setEmailErr("email 형식이 아닙니다.")
      : setEmailErr("");
    // event.target.value.includes("@") === false ||
    // event.target.value.includes(".") === false
    //   ? setEmailErr("email 형식이 아닙니다.")
    //   : setEmailErr("");
  };

  function typeChange() {
    pwType === "password" ? setPwType("text") : setPwType("password");
    // pwType === "password"
    //   ? (setPwType("text"), setPwTxt("hide"))
    //   : (setPwType("password"), setPwTxt("show"));
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function signup() {
    console.log(email + " / " + password);

    // validation
  }

  async function testApi() {
    const data = await axios.get("https://koreanjson.com/posts/1");
    console.log(`!@# data: ${data}`);
  }

  let style = {
    position: "absolute",
    left: "230px",
    top: "35px",
  };

  return (
    <>
      이메일: <input type="text" value={email} onChange={onChangeEmail} />
      <CheckErr id="emailCheck">{emailErr}</CheckErr>
      비밀번호:
      <label>
        <input
          id="signPw"
          placeholder="비밀번호 입력"
          type={pwType}
          value={password}
          onChange={onChangePassword}
        />
        <FontAwesomeIcon onClick={typeChange} icon={faEye} style={style} />
      </label>
      <CheckErr id="passCheck">{passErr}</CheckErr>
      <button onClick={signup}>회원가입</button>
    </>
  );
}
