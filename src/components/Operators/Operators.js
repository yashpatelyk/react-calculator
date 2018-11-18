import React from 'react';
import { GridList, GridTile } from 'material-ui';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import './Operators.css'

const OPS = ['/','-','+','='];
const styles = {
  gridList: {
    // width: 50,
    // height: 'auto',
    overflowY: 'auto',
    background: 'red',
    float: 'right'
  },
  gridTile: {
    background: 'white',
    border: '1px solid #A20025',
    boxSizing: 'border-box',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

const Operators = props => {

  styles.gridList.height = props.height;
  styles.gridList.width = props.width;

  return (
    <GridList cellHeight="auto" style={styles.gridList} cols={1} padding={0}>
      {OPS.map(operator => {
        return <GridTile
          key={operator}
          cols={1}
          rows={1}
          style={styles.gridTile}
        >
          <CalculatorButton 
          text={operator}
           clicked={() => props.write(operator)}
           classes={['Operator']}
          />
        </GridTile>
      })}
    </GridList>
  )
}

export default Operators;