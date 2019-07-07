import { createStore, combineReducers } from 'redux';

import cardReducer from './CardsReducer';
import ProfileReducer from './ProfileReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    profile: ProfileReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
