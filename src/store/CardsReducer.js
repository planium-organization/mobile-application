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

import { courses } from "./../res/colors";

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

function mapCourseToColor(course) {
  const result = courses.find(item => item.identifier === course);
  if (result) return result.color;
  else return "#000000";
}

const initialState = {
  cards: [
    // {
    //   key: parseInt(Math.random() * 10000),
    //   type: "todo",
    //   course: "Literature",
    //   color: mapCourseToColor("Literature"),
    //   date: new Date(2019, 5, 15, 12, 15, 0),
    //   duration: 75,
    //   startTime: true
    // },
    // {
    //   key: parseInt(Math.random() * 10000),
    //   type: "todo",
    //   course: "Physics",
    //   color: mapCourseToColor("Physics"),
    //   date: new Date(2019, 5, 16, 12, 15, 0),
    //   duration: 120,
    //   startTime: true
    // },
    // {
    //   key: parseInt(Math.random() * 10000),
    //   type: "todo",
    //   course: "Physics",
    //   color: mapCourseToColor("Physics"),
    //   date: new Date(2019, 5, 14),
    //   duration: 180,
    //   startTime: false
    // }
  ],
  selectedCard: null,
  visibleComments: null,
  currDate: new Date(2019, 5, 5),
  addingCard: false,
  dayColumnLoading: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          {
            key: Math.random(),
            type: action.cardType,
            course: action.cardCourse,
            color: mapCourseToColor(action.cardCourse),
            duration: action.cardDuration,
            date: action.cardDate,
            startTime: action.cardStartTime
          }
        ]
      };
    case EDIT_CARD:
      const newCards = state.cards.map(card => {
        if (card.key === action.cardKey)
          return {
            type: action.cardType ? action.cardType : card.type,
            course: action.cardCourse ? action.cardCourse : card.course,
            color: mapCourseToColor(
              action.cardCourse ? action.cardCourse : card.course
            ),
            duration: action.cardDuration ? action.cardDuration : card.duration,
            date: action.cardDate ? action.cardDate : card.date,
            startTime: action.cardStartTime
              ? action.cardStartTime
              : card.startTime
          };
        else return card;
      });
      return {
        ...state,
        cards: newCards
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
    case "RELOAD_ALL_CARDS":
      return {
        ...state,
        dayColumnLoading: 1,
        cards: []
      };
    case "SET_ALL_CARDS":
      return {
        ...state,
        dayColumnLoading: 0,
        cards: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
