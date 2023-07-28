/*
  13、ref的使用
*/
import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref: any) => {
  return <input ref={ref} />;
});

const MyInput2 = forwardRef((props, ref: any) => {
  const realInputRef = useRef<any>(null);
  useImperativeHandle(ref, () => ({
    // 只暴露 focus，没有别的
    focus() {
      realInputRef?.current?.focus();
    },
  }));
  return <input ref={realInputRef} />;
});

const Ref = () => {
  const ref = useRef(0);
  const inputRef = useRef<any>(null);
  const childRef = useRef<any>(null);
  const childRef2 = useRef<any>(null);

  const handleClick = () => {
    alert(ref.current++);
  };
  const handleFocusInput = () => {
    // 避免更改由 React 管理的 DOM 节点,一般进行聚焦和滚动等非破坏性操作
    inputRef.current?.focus();
  };

  const handleChildFocus = () => {
    childRef.current?.focus();
  };

  const handleChild2Focus = () => {
    //childRef2.current只有focus一个方法
    childRef2.current?.focus();
  };
  return (
    <div>
      {/* 当希望组件“记住”某些信息，但又不想让这些信息 触发新的渲染时使用ref */}
      <button onClick={handleClick}>点击alert提示</button>
      <br />
      {/* 将ref绑定到dom节点上，操作dom */}
      <input ref={inputRef} />
      <button onClick={handleFocusInput}>聚焦输入框</button>
      <br />
      {/* 将ref绑定到自定义组件上，子组件需要接收 */}
      <MyInput ref={childRef} />
      <button onClick={handleChildFocus}>聚焦子组件输入框</button>
      {/* 使用useImperativeHandle只暴露部分句柄  */}
      <MyInput2 ref={childRef2} />
      <button onClick={handleChild2Focus}>聚焦子组件输入框</button>
    </div>
  );
};

export default Ref;
