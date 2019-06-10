import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD,
  SHOW_COMMENTS,
  HIDE_COMMENTS,
} from "./ActionTypes";

export const addCard = (cType, cCourse, cDuration, cStartTime) => {
  return {
    type: ADD_CARD,
    cardType: cType,
    cardCourse: cCourse,
    cardDuration: cDuration,
    cardStartTime: cStartTime
  };
};

export const editCard = (cKey, newCardDetails) => {
  return {
    type: EDIT_CARD,
    cardKey: cKey,
    newCardDetails
  };
};

export const deleteCard = () => {
  return {
    type: DELETE_CARD
  };
};

export const selectCard = cardItem => {
  return {
    type: SELECT_CARD,
    cardItem
  };
};

export const deselectCard = () => {
  return {
    type: DESELECT_CARD
  };
};

export const showComments = (ofDay) => {
  return {
    type: SHOW_COMMENTS,
    payload: ofDay,
  };
}

export const hideComments = () => {
  return {
    type: HIDE_COMMENTS,
  };
}
