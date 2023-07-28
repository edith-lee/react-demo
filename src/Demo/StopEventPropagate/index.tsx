/*
  9、阻止事件冒泡和在捕获阶段触发事件
*/

const StopEventPropagate = () => {
  return (
    <div
      onClick={() => {
        alert("parent click event");
      }}
      onClickCapture={() => {
        alert("parent click capture event");
      }}
      style={{
        width: 300,
        height: 300,
        backgroundColor: "skyblue",
        padding: 50,
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "lightGreen",
          padding: 50,
        }}
        onClick={() => {
          alert("child1 click event");
        }}
      >
        child1
      </div>
      <div
        style={{
          width: 50,
          height: 50,
          backgroundColor: "pink",
          padding: 50,
        }}
        onClick={(e) => {
          e.stopPropagation();
          alert("child2 click event");
        }}
      >
        child2
      </div>
    </div>
  );
};

export default StopEventPropagate;
