import React, {useContext, useEffect, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {MyContext} from '../App';
import './styles.css';

const someUselessFunc = a => {
  let temp = 0;
  for (let i = 0; i < 1000000000; i++) {
    temp++;
  }
  return temp + a;
};

const Counter = () => {
  const {red, green} = useContext(MyContext);
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [textInputValue, setTextInputValue] = useState('');
  const [prevState, setPrevState] = useState(null);
  const ref = useRef(null);
  const prevCountRef = useRef(null);

  const increment = () => {
    setCount(prevState => {
      setPrevState(prevState);
      return prevState + step;
    });
  };

  const decrement = () => {
    setCount(prevState => {
      setPrevState(prevState);
      return prevState - step;
    });
  };

  const cancel = () => {
    setCount(0);
    setStep(1);
  };

  const textInputHandler = event => {
    setTextInputValue(event.target.value);
  };

  useLayoutEffect(() => {
    prevCountRef.current = count;
  });

  useEffect(() => {
    prevCountRef.current = count;
  });

  const someUselessValue = useMemo(() => someUselessFunc(count), [count]);

  return (
    <div>
      <div>
        <h1>Count: {count}</h1>
        <h1>Prev count: {prevCountRef.current}</h1>
        <h1>Prev state: {prevState}</h1>
        <h1>Some useless value: {someUselessValue}</h1>
      </div>
      <div>
        <input type="number" value={step} onChange={event => setStep(Number(event.target.value))}/>
        <br/>
        <input ref={ref} type="text" value={textInputValue} onChange={textInputHandler}/>
      </div>
      <div>
        <button className={green} onClick={increment}>+</button>
        <button className={red} onClick={decrement}>-</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default Counter;