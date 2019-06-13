import {
  ADD_CARD,
  EDIT_CARD,
  DELETE_CARD,
  SELECT_CARD,
  DESELECT_CARD,
  SHOW_COMMENTS,
  HIDE_COMMENTS,
  TABLE_CURRENT_DATE,
  ADDING_CARD
} from "./ActionTypes";

const initialState = {
  cards: [
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Maths",
      color: "#273baa",
      date: new Date(2019, 5, 13, 12, 15, 0),
      duration: 75,
      startTime: true
    },
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Physics",
      color: "#c12828",
      date: new Date(2019, 5, 14, 12, 15, 0),
      duration: 120,
      startTime: true
    },
    {
      key: parseInt(Math.random() * 10000),
      type: "todo",
      course: "Physics",
      color: "#c12828",
      date: new Date(2019, 5, 14),
      duration: 180,
      startTime: false
    }
  ],
  selectedCard: null,
  visibleComments: null,
  currDate: new Date(),
  addingCard: false
};

function getCommentsOfDay(day) {
  const comms = [];
  for (let i = 0; i < 12; i++) {
    comms.push({
      key: Math.random() * 10000,
      date: new Date(),
      text: `this is comment of this is comment of this is comment of this is comment of this is comment of ${i}`,
      owner: "Alex"
    });
  }
  return comms;
}

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
      let currentCard = state.cards.find(
        cardItem => cardItem.key === action.cardKey
      );
      currentCard = {
        ...currentCard,
        ...action.newCardDetails
      };
      return {
        ...state,
        cards: state.cards.map(cardItem => {
          if (cardItem.key === currentCard.key) {
            return currentCard;
          } else {
            return cardItem;
          }
        }),
        selectedCard:
          currentCard.key === action.cardKey ? currentCard : state.selectedCard
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
        selectedCard: action.cardItem
      };
    case DESELECT_CARD:
      return {
        ...state,
        selectedCard: null
      };
    case SHOW_COMMENTS:
      return {
        ...state,
        visibleComments: getCommentsOfDay(new Date())
      };
    case HIDE_COMMENTS:
      return {
        ...state,
        visibleComments: null
      };
    case TABLE_CURRENT_DATE:
      return {
        ...state,
        currDate: action.currDate
      };
    case ADDING_CARD:
      return {
        ...state,
        addingCard: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
