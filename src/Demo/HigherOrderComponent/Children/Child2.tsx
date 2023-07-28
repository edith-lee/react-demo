import withCounter from "../Warpped";

const Child2 = (props: any) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        width: 200,
        padding: 20,
      }}
    >
      <p>计数器2: {props.count}</p>
      <button onClick={props.addCount}>点击加1</button>
    </div>
  );
};

export default withCounter(Child2);
