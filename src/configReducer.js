export const configReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CONFIG":
      return {
        ...state,
        [payload.key]: payload.value,
      };

    default:
      return state;
  }
};
