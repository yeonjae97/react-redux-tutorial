// 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
const increase = () => ({type: INCREASE});
const decrease = () => ({type: DECREASE});

const initialState = {
  number: 0
};

function counter(state = initialState, action){
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      }
    case DECREASE:
      return {
        number: state.number + 1
      }
    default:
      return state;
  }
}

export default counter;