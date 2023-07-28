/*
  1、组件名称必须大写
*/

// 错误
// const myComponent = ()=>{
//   return <div>myComponent</div>
// }

// 正确
const MyComponent = () => {
  return <div>MyComponent</div>;
};

const ComponentName = () => {
  return (
    <div>
      {/* <myComponent /> */}
      <MyComponent />
    </div>
  );
};

export default ComponentName;
