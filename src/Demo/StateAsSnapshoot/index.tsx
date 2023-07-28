/*
  10、state 如同快照
*/

import { useState } from "react";

const StateAsSnapshoot = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div>
      <span>{number}</span>
      <button
        onClick={() => {
          // setNumber(number + 1)：这次渲染number 是 0 所以 setNumber(0 + 1)，React 准备在下一次渲染时将 number 更改为 1
          // 尽管调用了三次 setNumber(number + 1)，但在 这次渲染的 事件处理函数中 number 会一直是 0，所以你会三次将 state 设置成 1
          // 所以当事件处理函数执行完以后，React 重新渲染的组件中的 number 等于 1 而不是 3
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
          // 当前这次渲染，number是0，所以alert 0
          alert(number);
          // 等待3秒，alert 还是 0
          setTimeout(() => {
            // 虽然等待3秒后，number已经被修改为1，但alert是使用用户与之交互时状态的快照（交互时的那次渲染）进行调度的
            alert(`3秒后，number为${number}`); // 0
          }, 3000);
        }}
      >
        点击number+3
      </button>
      <br />
      <div>在下次渲染前多次更新同一个 state</div>
      <span>{number2}</span>
      <button
        onClick={() => {
          // setNumber(n => n + 1)：React发现 n => n + 1 是一个函数。所以React 将它加入队列。
          setNumber2((n) => n + 1);
          setNumber2((n) => n + 1);
          setNumber2((n) => n + 1);
          // 队列中加入了三个更新函数
          // 在下次渲染期间调用 useState 时，React 会遍历队列
          // 因为上一次的 number state 的值是 0，所以0作为参数 n 传递给第一个更新函数的值。
          // 然后 React 会获取你上一个更新函数的返回值，并将其作为 n 传递给下一个更新函数，以此类推
          // 执行完3个更新函数，React计算出3是最终结果并从 useState 中返回，渲染到页面上
        }}
      >
        点击number2 +3
      </button>
    </div>
  );
};

export default StateAsSnapshoot;
