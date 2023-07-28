/* eslint-disable @typescript-eslint/no-unused-vars */
/*
  15、尽量减少State的数量
*/

import { useMemo, useState } from "react";
const initialList = Array.from(Array(100), (v, k) => k + "");

// 假设这是一个复杂度很高的方法，使用useMemo优化
const getFilteredList = (list: string[], text: string) => {
  return list.filter((item) => item.indexOf(text) > -1);
};
const ReduceStateCount = () => {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  // 正确，在渲染期间进行计算
  const fullName = firstName + " " + lastName;

  const [list, setList] = useState<any[]>(initialList);
  const [text, setText] = useState("");
  // useMemo，会检查 list 或 text 是否发生了变化。
  // 如果它们跟上次渲染时一样，useMemo 会直接返回它最后保存的结果。
  // 如果不一样，React 将重新调用传入的函数
  const filterList = useMemo(() => getFilteredList(list, text), [list, text]);

  return (
    <>
      <div>全名为:{fullName}</div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul
        style={{
          height: 300,
          width: 200,
          overflow: "auto",
          background: "lightblue",
        }}
      >
        {filterList.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ReduceStateCount;
