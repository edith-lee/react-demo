/*
  18、异步组件React.lazy
*/
import React, { Suspense } from "react";
import ReactLoading from "react-loading";

const Child = React.lazy(() => import("./Child"));

const AsyncComponent = () => {
  return (
    <div>
      <Suspense fallback={<ReactLoading type="bars" color="pink" />}>
        <Child />
      </Suspense>
    </div>
  );
};

export default AsyncComponent;
