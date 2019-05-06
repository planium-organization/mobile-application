import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD
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
    newCardDetails: newCardDetails
  };
};

export const deleteCard = () => {
  return {
    type: DELETE_CARD
  };
};

export const selectCard = card => {
  return {
    type: SELECT_CARD,
    cardData: card
  };
};

export const deselectCard = () => {
  return {
    type: DESELECT_CARD
  };
};
