/*
  21、使用memo减少渲染
*/

import { memo, useState } from "react";

const Child = memo((props: any) => {
  console.log("Child was rendered at", new Date().toLocaleTimeString());
  return <div>child:{props.count}</div>;
});

const MemoUsage = () => {
  const [count, setCount] = useState(0);
  const [parentState, setParentState] = useState(0);
  return (
    <div>
      <Child count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击更改props
      </button>
      <div>parent:{parentState}</div>
      <button
        onClick={() => {
          setParentState(parentState + 1);
        }}
      >
        点击更改父组件state
      </button>
    </div>
  );
};

export default MemoUsage;
