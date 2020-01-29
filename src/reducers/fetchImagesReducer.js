/*import {FETCH_IMAGES_BEGIN,FETCH_IMAGES_SUCCESS,FETCH_IMAGES_FAILURE} from '../actions/fetchImagesActions';

const initialState = {
    images: [],
    loading: false,
    error: null
}

export default function fetchImagesReducer(state=initialState,action){
    switch(action.type) {
        case FETCH_IMAGES_BEGIN:
            return {
                state,
                loading: true,
                error: null
            };
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload.images
            }
        case FETCH_IMAGES_FAILURE:
            return {
                ...state,
                loading : false,
                error: action.payload.error,
                images: []
            }
        default:
            return state;
    }
}*/