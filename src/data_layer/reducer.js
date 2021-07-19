export const initialState = {
  loading: false,
  user: null,
};

const reducer = (prevState, action) => {
  switch (action.type.toUpperCase()) {
    case "SET_SEARCH_TEXT":
      return {
        ...prevState,
        searchText: action.payload,
      };

    case "SET_USER":
      return {
        ...prevState,
        user: { ...prevState.user, ...action.payload },
      };

    default:
      return prevState;
  }
};

export default reducer;
