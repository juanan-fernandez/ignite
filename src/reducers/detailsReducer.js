const initState = {
   game: {}
}

const detailsReducer = ((state = initState, action) => {
   switch(action.type) {
      case 'GET_DETAIL':
         return {...action.payload.game};
      default:
         return {...state};
   }
});

export default detailsReducer;