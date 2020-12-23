import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  // Ленивая инициализация ------------------------
  const [step, setStep] = useState(() => {
    const initialStep = 0;
    return initialStep;
  });
  // ----------------------------------------------
  console.log('render');
  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <input type="number" value={step} onChange={e => setStep(Number(e.target.value))}/>
      </div>
      <div>
        <button onClick={() => setCount(prevState => prevState + step)}>+</button>
        <button onClick={() => setCount(prevState => prevState - step)}>-</button>
        <button onClick={() => {
          setCount(0);
          setStep(0);
        }}>Cancel</button>
      </div>
    </div>
  );
};

export default Counter;