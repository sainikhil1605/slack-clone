import { GET_CURRENT_PAGE } from "./pages.actions";

const initialState = { page: "channel" };

const pageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CURRENT_PAGE: {
      return {
        page: initialState.page,
      };
    }
    default:
      return state;
  }
};
export default pageReducer;
