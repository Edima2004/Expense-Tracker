const reducer = (state, action) => {
  switch (action.type) {
    case "DEL_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transact) => transact.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
