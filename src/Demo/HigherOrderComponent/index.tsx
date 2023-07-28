/*
  17、高阶组件HOC
*/

import Child1WithCounter from "./Children/Child1";
import Child2WithCounter from "./Children/Child2";

const HigherOrderComponent = () => {
  return (
    <div>
      <Child1WithCounter />
      <br />
      <Child2WithCounter />
    </div>
  );
};

export default HigherOrderComponent;
