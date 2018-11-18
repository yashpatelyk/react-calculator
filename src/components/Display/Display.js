import React from 'react';
import './Display.css';

const Display = props => {

  return (
    <div className="Display">
      <p>{props.displayText}</p>
    </div>
  )
}

export default Display;