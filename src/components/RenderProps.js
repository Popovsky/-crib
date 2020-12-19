import React from 'react';

const RenderProps = (props) => {
  const state = {
    a: 5,
    b: 4,
  };
  return props.render(state);
};

export default RenderProps;