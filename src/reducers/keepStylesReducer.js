let initialState = {
  boxPosition: {
    left: 0.0,
    top: 0.0,
    transform: '0deg',
  },
  photoIndex: 0,
};

export default (keepStylesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BOX_POSITION':
      state = {
        ...state,
        boxPosition: {
          left: action.payload.left,
          top: action.payload.top,
          transfrom: action.payload.transform
        },
      };
      return state;

    case 'SET_PHOTO_INDEX':
      state = {...state, photoIndex: action.payload};
      return state;
      
    default:
      return state;
  }
});
