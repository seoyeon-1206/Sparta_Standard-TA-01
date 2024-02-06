// 초기 상태값
const initialState = {
  number: 0,
};
 
// 리듀서
const calculator = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_NUMBER':
      return {number: state.number + action.payload};
    
    case 'SUBTRACT_NUMBER':
      return {number: state.number - action.payload};

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default calculator;
