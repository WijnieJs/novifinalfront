export default function cartReducer(state, action) {
   switch (action.type) {
      case 'ADD_PRODUCT_TO_CART':
         let newQuantity = 1;
         const itemIndex = state.cart.items.findIndex((cp) => {
            return cp.productId === action.payload.id;
         });
         const updatedCartItems = [...state.cart.items];

         if (itemIndex >= 0) {
            newQuantity = state.cart.items[itemIndex].quantity + 1;
            updatedCartItems[itemIndex].quantity = newQuantity;
         } else {
            updatedCartItems.push({
               productId: action.payload.id,
               title: action.payload.title,
               quantity: newQuantity
            });
         }
         const updatedCart = {
            items: updatedCartItems
         };
         return {
            ...state,
            cart: updatedCart
         };
      case 'REMOVE_PRODUCT_FROM_CART': {
         if (state.cart.items.length <= 0) {
            return {
               ...state
            };
         }
         const newCartItems = state.cart.items.filter(
            (item) => item.productId !== action.payload
         );

         const newCart = state.cart;
         newCart.items = newCartItems;

         return {
            ...state,
            cart: newCart
         };
      }
      default:
         return state;
   }
}
