/*
  12、循环的jsx要加key
*/

import { useState } from "react";
const PlayerList = ["张三", "李四", "王五"];
const Child = ({ addStyle = false }: any) => {
  const [num, setNum] = useState(0);
  const style = addStyle
    ? {
        margin: 20,
        backgroundColor: "lightblue",
        width: 100,
        height: 100,
        borderRadius: 10,
        border: "2px solid lightgreen",
      }
    : { margin: 20, backgroundColor: "lightblue", width: 100, height: 100 };
  return (
    <div style={style}>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        点击加一
      </button>
    </div>
  );
};

const Score = ({ playerName }: any) => {
  const [score, setScore] = useState(0);

  return (
    <div
      style={{
        margin: 20,
        backgroundColor: "lightblue",
        width: 100,
        height: 100,
      }}
    >
      {playerName}的得分为：{score}
      <button
        onClick={() => {
          setScore(score + 10);
        }}
      >
        点击得分加10
      </button>
    </div>
  );
};

const StateRetainAndReset = () => {
  const [addStyle, setAddStyle] = useState(false);
  const [showChild, setShowChild] = useState(true);
  const [playerIndex, setPlayerIndex] = useState(0);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ backgroundColor: "lightgrey", width: 400, padding: 20 }}>
          <div>相同位置相同组件，state会保留</div>
          <Child />
          <Child addStyle={addStyle} />
          <button
            onClick={() => {
              setAddStyle(!addStyle);
            }}
          >
            点击给第二个组件添加/去掉样式
          </button>
        </div>
        <div style={{ backgroundColor: "lightgrey", width: 400, padding: 20 }}>
          <div>相同位置的不同组件，state会重置</div>
          {showChild ? <Child /> : null}
          <button
            onClick={() => {
              setShowChild(!showChild);
            }}
          >
            点击显示/隐藏子组件
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <div style={{ backgroundColor: "lightgrey", width: 400, padding: 20 }}>
          <div>有问题的例子：</div>
          <Score playerName={PlayerList[playerIndex]} />
          <button
            onClick={() => {
              setPlayerIndex(
                playerIndex === PlayerList.length - 1 ? 0 : playerIndex + 1
              );
            }}
          >
            点击更换玩家
          </button>
        </div>
        <div style={{ backgroundColor: "lightgrey", width: 400, padding: 20 }}>
          <div>重置state的两种方法</div>
          <div>1、将组件渲染在不同的位置</div>
          {playerIndex === 0 ? <Score playerName={PlayerList[0]} /> : null}
          {playerIndex === 1 ? <Score playerName={PlayerList[1]} /> : null}
          {playerIndex === 2 ? <Score playerName={PlayerList[2]} /> : null}
          <div>2、给组件传递不同的key</div>
          <Score
            playerName={PlayerList[playerIndex]}
            key={PlayerList[playerIndex]}
          />
          <button
            onClick={() => {
              setPlayerIndex(
                playerIndex === PlayerList.length - 1 ? 0 : playerIndex + 1
              );
            }}
          >
            点击更换玩家
          </button>
        </div>
      </div>
    </>
  );
};

export default StateRetainAndReset;
