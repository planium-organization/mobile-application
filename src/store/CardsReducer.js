import {
  ADD_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD
} from "./ActionTypes";

const initialState = {
  cards: {"2019": []},
  selectedCard: null
};

const dateToDayString = date => {
  return date.getYear().toString();
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: state.cards[dateToDayString(action.cardStartTime)].concat({
          key: Math.random(),
          type: action.cardType,
          course: action.cardCourse,
          duration: action.cardDuration,
          startTime: action.cardStartTime
        })
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => {
          return card.key !== state.selectedCard.key;
        }),
        selectedCard: null
      };
    case SELECT_CARD:
      return {
        ...state,
        selectedCard: state.cards.find(card => {
          return card.key === action.key;
        })
      };
    case DESELECT_CARD:
      return {
        ...state,
        selectedCard: null
      };
    default:
      return state;
  }
};

export default reducer;
