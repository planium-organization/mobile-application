import { ADD_CARD, DELETE_CARD, SELECT_CARD, DESELECT_CARD } from './ActionTypes';

export const addCard = (cType, cCourse, cDuration, cStartTime) => {
    return {
        type: ADD_CARD,
        cardType: cType,
        cardCourse: cCourse,
        cardDuration: cDuration,
        cardStartTime: cStartTime
    };
};

export const deleteCard = () => {
    return {
        type: DELETE_CARD
    };
};

export const selectCard = (key) => {
    return {
        type: SELECT_CARD,
        cardKey: key
    };
};

export const deselectCard = () => {
    return {
        type: DESELECT_CARD
    };
};
