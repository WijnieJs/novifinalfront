import React, {
   useState,
   useContext,
   useReducer,
   useEffect
} from 'react';

import Layout from './components/Layout/Layout';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNav from './components/Navigation/MobileNavigation/MobileNavigation';

import Backdrop from './components/Backdrop/Backdrop';

import ProductsRow from './pages/Product/ProductsRow';
import ProductList from './pages/Product/ProductList';
import ProductSingle from './pages/Product/ProductSingle';

import Admin from './pages/Admin';
import Toolbar from './components/Toolbar/Toolbar';
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import NotesContext from './shared/store/notes-context';
import notesReducer from './shared/store/notes';
import EventBus from './common/EventBus';
import AuthActions from './shared/store/AuthActions';
import './App.css';

import NoteApp from './pages/notes/NoteApp';
import NewProduct from './pages/Product/NewProduct';
import EditProduct from './pages/Product/EditProduct';
import Card from './components/Card/Card';
function App() {
   const [notes, dispatch] = useReducer(notesReducer, []);
   const [isAuth, setIsAuth] = useState(false);

   const [showModeratorBoard, setShowModeratorBoard] = useState(
      false
   );
   const [showAdminBoard, setShowAdminBoard] = useState(false);
   const [currentUser, setCurrentUser] = useState(undefined);

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
         setCurrentUser(user);
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
      setCurrentUser(undefined);
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
         <Route path='/productsrow' element={<ProductsRow />} />
         <Route
            path='/productdetail/:id'
            element={<ProductSingle />}
         />
         <Route path='/allproducts' element={<ProductList />} />
         <Route path='/newproduct' element={<NewProduct />} />
         <Route path='/edit' element={<EditProduct />} />
         <Route path='/cart' element={<Card />} />

         <Route path='/admin' element={<Admin />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
      </Routes>
   );

   return (
      <NotesContext.Provider value={{ notes, dispatch }}>
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
      </NotesContext.Provider>
   );
}
export default App;
