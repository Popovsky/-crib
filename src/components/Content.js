import React from 'react';

const Content = () => {
  let temp = 0;
  for (let i = 0; i < 5000000000; i++) {
    temp ++;
  }
  console.log(temp);
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, alias architecto corporis dicta fugiat incidunt iure iusto, magni nisi nostrum obcaecati odit porro quasi, quisquam ratione vel vitae voluptas voluptatum!</p>
    </div>
  );
};

export default Content;