import { createStore, combineReducers } from 'redux';

import cardReducer from './CardsReducer';
import postReducer from './PostReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    posts: postReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
