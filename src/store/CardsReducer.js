import {
  ADD_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD
} from "./ActionTypes";

const initialState = {
  cards: {
    day1: [
      {
        key: Math.random(),
        type: "todo",
        course: "Maths",
        color: "#273baa",
        duration: 75,
        startTime: null
      }
    ],
    day2: [
      {
        key: Math.random(),
        type: "todo",
        course: "Physics",
        color: "#c12828",
        duration: 120,
        startTime: null
      }
    ],
    day3: [
      {
        key: Math.random(),
        type: "todo",
        course: "Physics",
        color: "#c12828",
        duration: 120,
        startTime: null
      }
    ]
  },
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
          color: "#c12828",
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
        selectedCard: action.cardKey
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
