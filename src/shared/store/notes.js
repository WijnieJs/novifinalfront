const notesReducer = (state, action) => {
   switch (action.type) {
      case 'POPULATE_NOTES':
         return action.notes;
      case 'ADD_NOTE':
         return [...state, { ...action.product }];
      case 'REMOVE_NOTE':
         return state.filter((note) => note.title !== action.title);
      default:
         return state;
   }
};

export { notesReducer as default };
