/*
  19、错误边界组件
*/

import MyErrorBoundary from "../../Components/MyErrorBoundary";

const Child = () => {
  return <div>{(window as any).a.c}</div>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Child2 = () => {
  return (
    <button
      onClick={() => {
        throw Error("error");
      }}
    >
      点击抛出异常
    </button>
  );
};
const ErrorBoundary = () => {
  return (
    <MyErrorBoundary>
      <Child />
      {/* 事件处理中的错误无法通过ErrorBoundary组件捕获 */}
      {/* <Child2 /> */}
    </MyErrorBoundary>
  );
};

export default ErrorBoundary;
