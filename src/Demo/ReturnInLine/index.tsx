/*
  2、组件return同行
*/

const ReturnInLine = () => {
  // 正确
  // return <div>ReturnInLine</div>

  // 错误
  //   return
  //     <div>
  //       <span>ReturnInLine</span>
  //     </div>;

  // 正确
  return (
    <div>
      <span>ReturnInLine</span>
    </div>
  );
};

export default ReturnInLine;
