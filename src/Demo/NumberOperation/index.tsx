/*
  6、在JSX中切勿将数字放在 && 左侧
*/

import React, { useState } from "react";

const NumberOperation = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [list, setList] = useState([]);

  return (
    <>
      {/* 错误，页面会显示一个0 */}
      <div>{list.length && <div>渲染列表</div>}</div>
      {/* 正确，页面显示空白 */}
      <div>{list.length > 0 ? <div>渲染列表</div> : null}</div>
    </>
  );
};

export default NumberOperation;
