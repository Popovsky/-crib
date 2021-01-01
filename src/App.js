import React, {useState, Suspense} from 'react';
import withSuspense from './components/withSuspense';
const Content = React.lazy(() => import('./components/Content'));

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const btnHandler = () => setIsVisible(state => !state);
  return (
    <div>
      <button onClick={btnHandler}>{isVisible.toString()}</button>
      {/*{*/}
      {/*  isVisible && <Suspense fallback={<div>loading...</div>}>*/}
      {/*    <Content/>*/}
      {/*  </Suspense>*/}
      {/*}*/}
      {
        isVisible && withSuspense(Content)()
      }
    </div>
  );
};

export default App;