import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer';
import detailsReducer from './detailsReducer';


const rootReducer = combineReducers({
   games: gamesReducer,
   gameDetail: detailsReducer
});

export default rootReducer;
