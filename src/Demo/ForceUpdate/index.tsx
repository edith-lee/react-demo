/*
  14、使用flushSync 强制同步更新state
*/

import { useRef, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { flushSync } from "react-dom";

const initialList = Array.from(Array(100), (v, k) => k);

const ForceUpdate = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState<any[]>(initialList);
  const listRef = useRef<any>(null);
  const [text, setText] = useState("");

  function handleAdd() {
    // 只能滑动到列表新添加的前面一项
    setList([...list, text]);

    // 使用flushSync，可以滑动到列表新添加的最后一项
    // 与Vue的$nextTick可以处理的问题差不多
    // flushSync(() => {
    //   setList([...list, text]);
    // });

    setText("");
    listRef?.current?.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAdd}>添加</button>
      <ul
        style={{
          height: 300,
          width: 200,
          overflow: "auto",
          background: "lightblue",
        }}
        ref={listRef}
      >
        {list.map((item, index) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ForceUpdate;
