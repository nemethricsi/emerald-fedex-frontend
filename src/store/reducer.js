import setToday from '../utilities/today/today';

const initialState = {
  selectedBeginDate: setToday(),
  selectedEndDate: setToday(),
  beginErrorHandling: false,
  endErrorHandling: false,
  beginText: 'Dínom-dánom kezdete',
  endText: 'Dorbézolás végezte',
  transactions: [],
  transactionsAreLoaded: false,
  newTransactionModalIsOpen: false,
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
    case 'SUCCESFULLY_LOADED_TRANSACTIONS':
      return {
        transactions: action.payload,
        transactionsAreLoaded: true
      };
    case 'UNSUCCESFULLY_LOADED_TRANSACTIONS':
      return {
        error: action.payload,
        isLotransactionsAreLoadedaded: true
      };
    case 'HANDLENEWTRANSACTIONMODAL':
      return Object.assign({}, state, {
        newTransactionModalIsOpen: action.payload
      });
    default:
  }
  return state;
}

export default reducer;
