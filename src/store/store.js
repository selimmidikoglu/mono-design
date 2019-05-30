import { createStore, combineReducers} from 'redux';
import quoteDesignReducer from '../reducers/quoteDesignReducer';
import designBoxReducer from '../reducers/designBoxReducer';
import renderOrNotReducer from '../reducers/renderOrNotReducer';
import changeTextReducer from '../reducers/changeTextReducer';

const reducer = combineReducers({
    changeTextReducer,
    designBoxReducer,
    quoteDesignReducer,
    renderOrNotReducer 
})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;