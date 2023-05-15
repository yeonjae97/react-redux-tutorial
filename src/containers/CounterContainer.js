import React from 'react';
import Counter from '../components/Counter';
import { connect } from '../../node_modules/react-redux/es/exports';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';

const CounterContainer = ({number, increase, decrease}) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
};

const mapStateToProps = (state) => ({
  number: state.counter.number
})

// 1번째 방법
const mapDispatchToProps = dispatch => ({

  increase: () => {
    // console.log('increase');
    dispatch(increase());
  },
  decrease: () =>{
    // console.log('decrease');
    dispatch(decrease());
  }
} 
)

// 2번째 방법
  // const mapDispatchToProps = dispatch => bindActionCreators({increase, decrease}, dispatch);

// 3번째 방법
// const mapDispatchToProps = {increase, decrease};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (CounterContainer);