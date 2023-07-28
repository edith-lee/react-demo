/*
  16、自定义Hook
*/

import { useEffect, useState } from "react";

// 定时器，每秒增加1
// 命名需要以use开头
// 最好有意义，useTimerAddOnePreSec
const useTimer = (initialValue:number) => {
    let [count, setCount] = useState(initialValue)

    useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => ++ count)
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return count
}

const Counter1 = ()=>{
    const count = useTimer(0);
    return <span>计数器1:{count}</span>
}

const Counter2 = ()=>{
    const count = useTimer(100);
    return <span>计数器2:{count}</span>
}

const CustomHook = () => {

  return (
    <div>
      <Counter1 />
      <br />
      <Counter2 />
    </div>
  );
};

export default CustomHook;
