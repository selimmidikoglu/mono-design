import { createStore, combineReducers, applyMiddleware} from 'redux';
import quoteDesignReducer from '../reducers/quoteDesignReducer';
import designBoxReducer from '../reducers/designBoxReducer';
import renderOrNotReducer from '../reducers/renderOrNotReducer';
import changeTextReducer from '../reducers/changeTextReducer';
import imageReducer from '../reducers/imageReducer';
import prevReducer from '../reducers/prevReducer';
import fetchImagesReducer from '../reducers/fetchImagesReducer';
import changeTextBackgroundReducer from '../reducers/changeTextBackgroundReducer';
import rotateReducer from '../reducers/rotateReducer';
import changeTextShadowReducer from '../reducers/changeTextShadowReducer';
//middlewares
import thunk from 'redux-thunk';
//DEV TOOLS
import { composeWithDevTools } from "redux-devtools-extension";
const reducer = combineReducers({
    changeTextReducer,
    designBoxReducer,
    imageReducer,
    quoteDesignReducer,
    renderOrNotReducer,
    prevReducer,
    fetchImagesReducer,
    changeTextBackgroundReducer,
    rotateReducer,
    changeTextShadowReducer
})
const store = createStore(reducer,applyMiddleware(thunk));

export default store;