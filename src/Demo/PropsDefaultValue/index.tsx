/*
  5、props传递参数使用默认值
*/

const Child = ({value = 1}:{value?:any})=>{
    return <span>value的值为:{String(value)}</span>
}

const PropsDefaultValue = () => {
    return (
      <div>
        value传递100--<Child value={100}/>
        <br />
        不传value--<Child />
        <br />
        value传递undefined--<Child value={undefined}/>
        <br />
        {/* 使用时需要注意，确定是否要使用默认值 */}
        value传递null--<Child value={null}/>
        <br />
        {/* 使用时需要注意，确定是否要使用默认值 */}
        value传递0--<Child value={0}/>
      </div>
    );
  };
  
  export default PropsDefaultValue;
  