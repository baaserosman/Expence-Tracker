export const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_BUTTON":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "ADD_BUTTON":
      return {
        ...state,

        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
