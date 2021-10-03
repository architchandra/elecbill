const billsDefaultState = [];
const billsReducer = (state = billsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BILL':
      return [
        ...state,
        action.bill,
      ];

    default:
      return state;
  };
};
export default billsReducer;
