import { useState } from "react";

export default function TestPg() {
  const testBtn = () => {
    const [email, setEmail] = useState('')
    setEmail("aaaa")
    console.log("!!!: ",email);
  }

  return(
   <>
    <button onClick={testBtn}>testBtn</button>
   </>
  )
}