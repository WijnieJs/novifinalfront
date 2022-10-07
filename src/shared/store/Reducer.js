export default (state, action) => {
   switch (action.type) {
      case 'DELETE_FAVORITE':
         return {
            ...state,
            favorites: action.payload
         };

      case 'ADD_FAVORITE':
         return {
            ...state,
            favorites: action.payload
         };
      default:
         return state;
   }
};
