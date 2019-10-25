import setToday from '../utilities/today/today';

const initialState = {
  selectedBeginDate: setToday(),
  selectedEndDate: setToday(),
  beginErrorHandling: false,
  endErrorHandling: false,
  beginText: 'Dínom-dánom kezdete',
  endText: 'Dorbézolás végezte',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETBEGIN':
        return Object.assign({}, state, {
          selectedBeginDate: action.payload,
        });
    case 'SETEND':
      return Object.assign({}, state, {
        selectedEndDate: action.payload
      });
    case 'SETBEGINERROR':
      return Object.assign({}, state, {
        beginErrorHandling: action.payload
      });
    case 'SETBEGINTEXT':
      return Object.assign({}, state, {
        beginText: action.payload
      });
    case 'SETENDERROR':
      return Object.assign({}, state, {
        endErrorHandling: action.payload
      });
    case 'SETENDTEXT':
      return Object.assign({}, state, {
        endText: action.payload
      });
    default:
  }
  return state;
}

export default reducer;
