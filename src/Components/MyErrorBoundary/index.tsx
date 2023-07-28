import React from "react";

export default class MyErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // 将错误日志上报给服务器
    console.log(error, errorInfo);
  }

  render() {
    if ((this.state as any).hasError) {
      // 自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return (this.props as any).children;
  }
}
