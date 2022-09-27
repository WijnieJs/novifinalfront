const productsReducer = (state, action) => {
  switch (action.type) {
    case 'INIT_PRODUCTS':
      return action.products
    case 'ADD_PRODUCT':
      return [...state, { title: action.title, body: action.body }]
    case 'REMOVE_NOTE':
      return state.filter((note) => note.title !== action.title)
    default:
      return state
  }
}

export { productsReducer as default }
