import React from 'react';
import { GridList, GridTile } from 'material-ui';
import CalculatorButton from '../CalculatorButton/CalculatorButton';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const styles = {
  gridList: {
    // width: 250,
    // height: '',
    overflowY: 'auto',
    background: 'red',
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
const NumPad = props => {

  styles.gridList.width = props.width;
  styles.gridList.height = props.height;

  return (
    <GridList cellHeight="auto" style={styles.gridList} cols={3} padding={0}>
      <GridTile
        key="clear"
        cols={3}
        rows={1}
        style={styles.gridTile}
      >
        <CalculatorButton
          text='clear'
          clicked={props.cleared} />
      </GridTile>
      {NUMBERS.map(number => {
        return <GridTile
          key={number}
          cols={1}
          rows={1}
          style={styles.gridTile}
        >
          <CalculatorButton
            text={number}
            clicked={() => props.write(number)}
          />
          {/* <p>{number}</p> */}
        </GridTile>
      })}
    </GridList>
  );
};

export default NumPad;
