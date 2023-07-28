import withCounter from "../Warpped";

const Child1 = (props: any) => {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: 200,
        height: 200,
        padding: 20,
      }}
    >
      <button onClick={props.addCount}>点击加1</button>
      <h1>计数器1: {props.count}</h1>
    </div>
  );
};

export default withCounter(Child1);
