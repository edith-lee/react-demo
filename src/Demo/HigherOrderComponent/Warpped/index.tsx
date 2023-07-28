import { useState } from "react";

const withCounter = (WrappedComponent: React.FC) => {
  return (props: any) => {
    const [count, setCount] = useState(0);
    const addCount = () => {
      setCount(count + 1);
    }
    return <WrappedComponent count={count} addCount={addCount} {...props} />;
  };
};

export default withCounter;