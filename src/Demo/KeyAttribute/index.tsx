/*
  7、循环的jsx要加key
*/

import { useState } from "react";

const KeyAttribute = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState([
    { id: "001", name: "张三" },
    { id: "002", name: "李四" },
    { id: "003", name: "王五" },
  ]);

  return (
    <ul>
      {list.map((item,index) => (
        // 错误
        // <li key={index}>{item.name}</li>
         // 错误
        // <li key={Math.random()}>{item.name}</li>
        //正确
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default KeyAttribute;
