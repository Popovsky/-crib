import React, {memo, useRef, useEffect} from 'react';

const areEqual = (prevProps, nextProps) => {
  return prevProps.name[0] === nextProps.name[0];
};

const Comp = props => {
  const prevName = useRef(null);
  useEffect(() => {
    prevName.current = props.name;
  });
  console.log('Component');
  return (
    <div>
      Component {props.name} {prevName.current}
    </div>
  );
};

export default memo(Comp, areEqual);