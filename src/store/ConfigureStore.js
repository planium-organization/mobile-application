import { createStore, combineReducers } from 'redux';

import cardReducer from './CardsReducer';

const rootReducer = combineReducers({
    cards: cardReducer
});

const configureStore = () => {
    // console.log("here");
    return createStore(rootReducer);
};

export default configureStore;
