/*
  4、只能返回一个根元素
*/

import React from "react";

const OnlyOneRoot = () => {
  // 错误
  //   return (
  //     <div>1</div>
  //     <div>2</div>
  //   );

  // 正确
  // return (
  //   <>
  //     <div>1</div>
  //     <div>2</div>
  //   </>
  // );

  // 正确，可以加key
  return (
    <React.Fragment key="OnlyOneRoot">
      <div>1</div>
      <div>2</div>
    </React.Fragment>
  );
};

export default OnlyOneRoot;
