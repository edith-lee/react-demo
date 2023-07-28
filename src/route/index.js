import React from "react";

const route = [
  {
    name: "组件名称必须大写",
    path: "/component-name",
    component: React.lazy(() => import("../Demo/ComponentName")),
  },
  {
    name: "组件“return同行”",
    path: "/return-in-line",
    component: React.lazy(() => import("../Demo/ReturnInLine")),
  },
  {
    name: "不要嵌套定义组件",
    path: "/define-components",
    component: React.lazy(() => import("../Demo/DefineComponents")),
  },
  {
    name: "只能返回一个根元素",
    path: "/only-one-root",
    component: React.lazy(() => import("../Demo/OnlyOneRoot")),
  },
  {
    name: "props传递参数使用默认值",
    path: "/props-default-value",
    component: React.lazy(() => import("../Demo/PropsDefaultValue")),
  },
  {
    name: "在JSX中切勿将数字放在 && 左侧",
    path: "/number-operation",
    component: React.lazy(() => import("../Demo/NumberOperation")),
  },
  {
    name: "循环的jsx要加key",
    path: "/key-attribute",
    component: React.lazy(() => import("../Demo/KeyAttribute")),
  },
  {
    name: "使用严格模式检测不纯的计算",
    path: "/strict-mode-test",
    component: React.lazy(() => import("../Demo/StrictModeTest")),
  },
  {
    name: "阻止事件冒泡和在捕获阶段触发事件",
    path: "/stop-event-propagate",
    component: React.lazy(() => import("../Demo/StopEventPropagate")),
  },
  {
    name: "state如同快照 setState表现出异步特征",
    path: "/state-as-snapshoot",
    component: React.lazy(() => import("../Demo/StateAsSnapshoot")),
  },
  {
    name: "setState更新引用类型",
    path: "/update-complex-type",
    component: React.lazy(() => import("../Demo/UpdateComplexType")),
  },
  {
    name: "state保留和重置",
    path: "/state-retain-and-reset",
    component: React.lazy(() => import("../Demo/StateRetainAndReset")),
  },
  {
    name: "ref的使用",
    path: "/ref-usage",
    component: React.lazy(() => import("../Demo/RefUsage")),
  },
  {
    name: "flushSync 强制同步更新state",
    path: "/force-update",
    component: React.lazy(() => import("../Demo/ForceUpdate")),
  },
  {
    name: "尽量减少State的数量",
    path: "/reduce-state-count",
    component: React.lazy(() => import("../Demo/ReduceStateCount")),
  },
  {
    name: "自定义Hook",
    path: "/custom-hook",
    component: React.lazy(() => import("../Demo/CustomHook")),
  },
  {
    name: "高阶组件HOC",
    path: "/higher-order-component",
    component: React.lazy(() => import("../Demo/HigherOrderComponent")),
  },
  {
    name: "异步组件React.lazy",
    path: "/async-component",
    component: React.lazy(() => import("../Demo/AsyncComponent")),
  },
  {
    name: "错误边界组件",
    path: "/error-boundary",
    component: React.lazy(() => import("../Demo/ErrorBoundary")),
  },
  {
    name: "Profiler测量性能",
    path: "/measure-performance",
    component: React.lazy(() => import("../Demo/MeasurePerformance")),
  },
  {
    name: "使用memo减少渲染",
    path: "/memo-usage",
    component: React.lazy(() => import("../Demo/MemoUsage")),
  },
  {
    name: "使用useCallback缓存函数",
    path: "/use-callback",
    component: React.lazy(() => import("../Demo/UseCallback")),
  },
];

export default route;
