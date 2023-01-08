import React, {
   useState,
   useReducer,
   useEffect,
   useContext
} from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNav from './components/Navigation/MobileNavigation/MobileNavigation';
import Layout from './components/Layout/Layout';
import Card from './components/Card/Card';
import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';

import ProductList from './pages/Product/ProductList';
import ProductSingle from './pages/Product/ProductSingle';
import Admin from './pages/Admin';

import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import NewProduct from './pages/Product/NewProduct';
import EditProduct from './pages/Product/EditProduct';
import AddImageToProd from './pages/Product/AddImageToProduct';

import AuthActions from './shared/store/AuthActions';
import ShopContext from './shared/store/context';
import cartItemsReducer from './shared/store/reducer';
import EventBus from './common/EventBus';

function App() {
   const initialState = useContext(ShopContext);
   const [shop, dispatch] = useReducer(
      cartItemsReducer,
      initialState
   );

   const [isAuth, setIsAuth] = useState(false);
   const [showModeratorBoard, setShowModeratorBoard] = useState(
      false
   );
   const [showAdminBoard, setShowAdminBoard] = useState(false);
   // const [currentUser, setCurrentUser] = useState(undefined);

   const [navState, setNavState] = useState({
      showBackdrop: false,
      showMobileNav: false,
      auth: false,
      error: null
   });
   const { showBackdrop, showMobileNav, error } = navState;
   useEffect(() => {
      const user = AuthActions.getCurrentUser();

      if (user) {
         console.log(user.roles);
         setIsAuth(true);
         // setCurrentUser(user);
         setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
         setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
      }

      EventBus.on('logout', () => {
         logOut();
      });

      return () => {
         EventBus.remove('logout');
      };
   }, []);

   const logOut = () => {
      AuthActions.logout();
      setIsAuth(false);
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
      // setCurrentUser(undefined);
   };

   const mobileNavHandler = (isOpen) => {
      setNavState({ showMobileNav: isOpen, showBackdrop: isOpen });
   };

   const backdropClickHandler = () => {
      setNavState({
         showBackdrop: false,
         showMobileNav: false,
         error: null
      });
   };

   let routes = (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route
            path='/productdetail/:id'
            element={<ProductSingle />}
         />
         <Route path='/allproducts' element={<ProductList />} />
         <Route path='/newproduct' element={<NewProduct />} />
         <Route path='/edit/:id' element={<EditProduct />} />
         <Route path='/cart' element={<Card />} />
         <Route
            path='/image-request/:id'
            element={<AddImageToProd />}
         />
         <Route path='/admin' element={<Admin />} />
         <Route path='/login' element={<Login />} />
         {/* <Route path='/checkout' element={<Checkout />} /> */}

         <Route path='/signup' element={<Signup />} />
      </Routes>
   );

   return (
      <ShopContext.Provider value={{ shop, dispatch }}>
         <BrowserRouter>
            <React.Fragment>
               {showBackdrop && (
                  <Backdrop onClick={backdropClickHandler} />
               )}
               <Layout
                  header={
                     <Toolbar>
                        <MainNavigation
                           onOpenMobileNav={() =>
                              mobileNavHandler(true)
                           }
                           onLogout={logOut}
                           mod={showModeratorBoard}
                           admin={showAdminBoard}
                           isAuth={isAuth}
                        />
                     </Toolbar>
                  }
                  mobileNav={
                     <MobileNav
                        open={showMobileNav}
                        mobile
                        onChooseItem={() => mobileNavHandler(false)}
                        onLogout={logOut}
                        mod={showModeratorBoard}
                        admin={showAdminBoard}
                        // user={currentUser}
                        isAuth={isAuth}
                     />
                  }
               />
               <Home />
               {routes}
            </React.Fragment>
         </BrowserRouter>
      </ShopContext.Provider>
   );
}
export default App;
