/* eslint-disable @typescript-eslint/no-unused-vars */
/*
  22、使用useCallback缓存函数
*/

import { memo, useCallback, useEffect, useState } from "react";

const Child = memo((props: any) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getSomethingByCount = () => {
    return { count: props.count };
  };

  const getSomethingByCount2 = useCallback(() => {
    return { count: props.count };
  }, [props.count]);

  // 使用情况2：useEffect中调用了依赖与响应值变化的方法
  useEffect(() => {
    const data = getSomethingByCount();
    console.log("useEffect called at", new Date().toLocaleTimeString(), data);
  }, [getSomethingByCount]);

  console.log("Child was rendered at", new Date().toLocaleTimeString());
  return (
    <>
      <div>child:{props.count}</div>{" "}
      <button
        onClick={() => {
          props.changeCount(props.count + 1);
        }}
      >
        点击更改count
      </button>
    </>
  );
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [parentState, setParentState] = useState(0);

  // 使用情况1：如果不使用useCallback，每次修改父组件state都会导致子组件渲染
  const changeCount = (value: number) => {
    setCount(value);
  };
  const changeCount2 = useCallback((value: number) => {
    setCount(value);
  }, []);

  return (
    <div>
      <Child count={count} changeCount={changeCount} />
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

export default UseCallback;
