import React, { useState } from "react";
import { Rate } from "antd";
import "antd/dist/antd.css";
// const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  return (
    <Rate onChange={setValue} value={value} />

    // <Flex gap="middle" vertical>
    //   <Rate tooltips={desc} onChange={setValue} value={value} />
    //   {value ? <span>{desc[value - 1]}</span> : null}
    // </Flex>
  );
}
