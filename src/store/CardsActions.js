import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD,
  SHOW_COMMENTS,
  HIDE_COMMENTS,
  TABLE_CURRENT_DATE,
  ADDING_CARD,
  GET_CARDS_FULFILLED,
  GET_CARDS_PENDING,
  GET_CARDS_REJECTED
} from "./ActionTypes";

export const addCard = (
  cardType,
  cardCourse,
  cardDuration,
  cardDate,
  cardStartTime
) => {
  return {
    type: ADD_CARD,
    cardType,
    cardCourse,
    cardDuration,
    cardDate,
    cardStartTime
  };
};

export const editCard = (
  cardKey,
  cardType,
  cardCourse,
  cardDuration,
  cardDate,
  cardStartTime
) => {
  return {
    type: EDIT_CARD,
    cardKey,
    cardType,
    cardCourse,
    cardDuration,
    cardDate,
    cardStartTime
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

export const showComments = ofDay => {
  return {
    type: SHOW_COMMENTS,
    payload: ofDay
  };
};

export const hideComments = () => {
  return {
    type: HIDE_COMMENTS
  };
};

export const tableCurrentDate = currDate => {
  return {
    type: TABLE_CURRENT_DATE,
    currDate
  };
};

export const addingCardToggle = enable => {
  return {
    type: ADDING_CARD,
    payload: enable
  };
};

export const setAllCards = cards => {
  return {
    type: "SET_ALL_CARDS",
    payload: cards
  };
};

export const reloadAllCards = () => {
  return {
    type: "RELOAD_ALL_CARDS"
  };
};

export const getCardsPending = () => {
  return {
    type: GET_CARDS_PENDING,
    cardsLoading: true
  };
};

export const getCardsFulfilled = fetchedCards => {
  return {
    type: GET_CARDS_FULFILLED,
    payload: fetchedCards,
    cardsLoading: false
  };
};

export const getCardsRejected = err => {
  return {
    type: GET_CARDS_REJECTED,
    error: err,
    cardsLoading: false
  };
};
