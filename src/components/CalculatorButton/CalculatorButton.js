import React from 'react';
import './CalculatorButton.css';

const CalculatorButton = props => {

  const text = props.text;
  let classes = ['Button'];
  if(props.classes) {
    classes.push(props.classes);
  }

  return (
    <div className={classes.join(' ')}>
    <button onClick={props.clicked}>
      {text}
    </button>
    </div>
  )
}

export default CalculatorButton;