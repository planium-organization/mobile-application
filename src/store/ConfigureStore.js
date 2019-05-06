import { createStore, combineReducers } from 'redux';

import cardReducer from './CardsReducer';

const rootReducer = combineReducers({
    cards: cardReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
