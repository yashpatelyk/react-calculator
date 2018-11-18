import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import NumPad from '../../components/NumPad/NumPad';
import Operators from '../../components/Operators/Operators';
import Display from '../../components/Display/Display';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 60,
  },
  gridList: {
    width: 300,
    height: 450,
    overflowY: 'auto',
    // background: 'red'
  },
  gridTile: {
    background: 'white',
    border: '1px solid #A20025',
    boxSizing: 'border-box',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
  },
};

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      prevResult: 0,
      operation: '',
    };
  }

  onClear = () => {
    console.log('clear');
    this.setState(prevState => {
      return {
        result: 0,
        prevResult: 0,
        operation: '',
      };
    });
  };

  onWriteNumpad = num => {
    console.log('write ' + num);
    this.setState(prevState => {
      return {
        result: Number(prevState.result + '' + num),
      };
    });
  };

  onWriteOperators = op => {
    console.log('perform ' + op);
    if (op !== '=') {
      this.setState(prevState => {
        return {
          prevResult: prevState.result,
          result: 0,
          operation: op,
        };
      });
    } else {
      let ans = 0;
      switch (this.state.operation) {
        case '/':
          ans = Number((this.state.prevResult / this.state.result).toFixed(7));
          break;
        case '-':
          ans = this.state.prevResult - this.state.result;
          break;
        case '+':
          ans = this.state.prevResult + this.state.result;
          break;
        default:
          console.log('Op not supported');
      }
      this.setState(prevState => {
        return {
          result: ans,
          prevResult: 0,
          operation: '',
        };
      });
    }
  };

  render() {
    return (
      <div style={styles.root}>
        <GridList
          cellHeight="auto"
          style={styles.gridList}
          cols={2}
          padding={0}
        >
          <GridTile key="display" cols={2} rows={1} style={styles.gridTile}>
            <Display displayText={this.state.result} />
          </GridTile>

          <NumPad
            width={styles.gridList.width - 50}
            height={styles.gridList.height * 0.75}
            cleared={this.onClear}
            write={this.onWriteNumpad}
          />
          <Operators 
            write={this.onWriteOperators}
            width={50}
            height={styles.gridList.height * 0.75} />
        </GridList>
      </div>
    );
  }
}

export default Calculator;
