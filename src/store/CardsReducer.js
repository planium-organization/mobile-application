import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD
} from "./ActionTypes";

const initialState = {
  cards: [
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Maths",
      color: "#273baa",
      date: "day1",
      duration: 75,
      startTime: { hour: 0, minute: 12 }
    },
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Physics",
      color: "#c12828",
      date: "day2",
      duration: 120,
      startTime: null
    },
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Physics",
      color: "#c12828",
      date: "day3",
      duration: 120,
      startTime: null
    }
  ],
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
    case EDIT_CARD:
      const currentKey = action.newCardDetails.key;
      let currentCard;
      for (let day of state.cards) {
        for (let card of day) {
          if (card.key === currentKey) {
          }
        }
      }
      return {
        ...state
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
      const selectedCard = state.cards.find(cardItem => cardItem.key === action.cardKey)
      console.log(`Selected Card: ${selectedCard.course}`);
      return {
        ...state,
        selectedCard: selectedCard
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
