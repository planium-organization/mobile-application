import { GET_COURSES_FULFILLED } from "./ActionTypes";

export const getCoursesFulfilled = courses => {
  return {
    type: GET_COURSES_FULFILLED,
    payload: courses
  };
};
