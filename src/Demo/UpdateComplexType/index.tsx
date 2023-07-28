/*
  12、setState更新引用类型
*/

import { useState } from "react";
import lodash from "lodash";
import { useImmer } from "use-immer";
const UpdateComplexType = () => {
  const [obj, setObj] = useState({ x: 1, y: 1 });
  const [immerObj, updateImmerObj] = useImmer({ x: 1, y: 1 });
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  return (
    <>
      <div>对象类型：{JSON.stringify(obj)}</div>
      <button
        onClick={() => {
          // 错误。不生效
          obj.x = 2;
          setObj(obj);
        }}
      >
        点击更新对象的x(直接更改)
      </button>
      <button
        onClick={() => {
          // 浅拷贝
          setObj({ ...obj, x: 2 });
        }}
      >
        点击更新对象的x(展开语法)
      </button>
      <button
        onClick={() => {
          const newObj = lodash.cloneDeep(obj);
          newObj.x = 3;
          setObj(newObj);
        }}
      >
        点击更新对象的x(深拷贝)
      </button>
      <div>对象类型(使用immer)：{JSON.stringify(immerObj)}</div>
      <button
        onClick={() => {
          updateImmerObj((draft) => {
            draft.x = 2;
          });
        }}
      >
        点击更新对象(使用immer)
      </button>
      <div>数组类型：{JSON.stringify(arr)}</div>
      <button
        onClick={() => {
          setArr(arr.concat([6]));
        }}
      >
        数组增加元素
      </button>
      <button
        onClick={() => {
          setArr(arr.filter((item) => item !== 1));
        }}
      >
        数组删除元素
      </button>
      <button
        onClick={() => {
          setArr(arr.map((item) => (item === 3 ? 300 : item)));
        }}
      >
        数组替换元素
      </button>
    </>
  );
};

export default UpdateComplexType;
