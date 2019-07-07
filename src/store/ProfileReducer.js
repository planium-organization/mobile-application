import { GET_COURSES_FULFILLED } from "./ActionTypes";

const initialState = {
  courses: [
    {
      id: "1234",
      title: "Lite",
      color: "#f53d54"
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES_FULFILLED:
      return {
        ...state,
        courses: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
