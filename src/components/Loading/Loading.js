import React from 'react';
import ReactDelayRender from 'react-delay-render';

const render = () => {
    console.log('I am rendering');
  };
const Loading = () => <h1>Loading!!!</h1>;

export default ReactDelayRender({ delay: 700, onRender: render })(Loading);