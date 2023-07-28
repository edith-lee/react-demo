/*
  3、不要嵌套定义组件
*/

import { useState } from "react";

const DefineComponents = () => {
  const [clickTime, setClickTime] = useState(0);

  // 内部定义组件 错误
  const InsideComponent = () => {
    const [clickTime, setClickTime] = useState(0);
    return (
      <div>
        <button
          onClick={() => {
            setClickTime(clickTime + 1);
          }}
        >
          内部组件：点击了{clickTime}次
        </button>
      </div>
    );
  };

  return (
    <div>
      <InsideComponent />
      <br></br>
      <button
        onClick={() => {
          setClickTime(clickTime + 1);
        }}
      >
        外部组件：点击了{clickTime}次
      </button>
    </div>
  );
};

export default DefineComponents;
