/*
  20、Profiler测量性能
*/
import { Profiler, useState } from "react";
import ReduceStateCount from "../ReduceStateCount";

const onProfilerRender = (
  id: string,
  phase: string,
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  console.group("onProfilerRender id:", id);
  console.log("phase:", phase);
  console.log("actualDuration:", actualDuration);
  console.log("baseDuration:", baseDuration);
  console.log("startTime:", startTime);
  console.log("commitTime:", commitTime);
  console.groupEnd();
};
const MeasurePerformance = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击更新父组件State
      </button>
      <Profiler id="ReduceStateCount" onRender={onProfilerRender}>
        <ReduceStateCount />
      </Profiler>
    </>
  );
};

export default MeasurePerformance;
