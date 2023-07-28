/*
  8、使用严格模式检测不纯的计算
*/
let peopleNumber = 1;

// child组件不纯粹，修改了预先存在的变量或对象
const Child = () => {
  peopleNumber++;
  return <div> Child say hello to people {peopleNumber}</div>;
};

// child组件不纯粹，修改了props
const Child2 = ({ obj }: { obj: { num: number } }) => {
  obj.num++;
  return <div>Child2 say hello to people {obj.num}</div>;
};

const StrictModeTest = () => {
  let obj = { num: 1 };
  return (
    <div>
      <Child />
      <Child />
      <Child />
      <Child />
      <Child2 obj={obj} />
      <Child2 obj={obj} />
      <Child2 obj={obj} />
      <Child2 obj={obj} />
    </div>
  );
};

export default StrictModeTest;
