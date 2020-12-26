import React, {useEffect, useMemo, useState} from 'react';
import './styles.css';

const someUselessFunc = a => {
  let temp = 0;
  for (let i = 0; i < 1000000000; i++) {
    temp++;
  }
  return temp + a;
};

const Counter = () => {
  const [count, setCount] = useState(0);
  const [colored, setColored] = useState();
  const styles = useMemo(() => ({
    color: colored ? 'red' : 'green',
  }), [colored]);

  const increment = () => {
    setColored(false);
    setCount(prevState => {
      return prevState + 1;
    });
  };

  const decrement = () => {
    setColored(true);
    setCount(prevState => {
      return prevState - 1;
    });
  };

  const cancel = () => {
    setCount(0);
  };

  useEffect(() => {
    console.log('Color changed');
  }, [styles]);

  return (
    <div>
      <div>
        <h1 style={styles}>Count: {count}</h1>
      </div>
      <div>
      </div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Counter;