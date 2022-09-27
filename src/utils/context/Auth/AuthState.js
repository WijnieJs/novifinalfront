// 25 load user

// 42 register user

// 63 login user

//80 logout user

// 85clear errors

// 90 // AuthState Provider Component
// const AuthState = (props) => {
//   const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     loading: true,
//     user: null,
//     error: null
//   };

// const [state, dispatch] = useReducer(authReducer, initialState);
// set token on initial app loading
// setAuthToken(state.token);

// load user on first run or refresh
// if (state.loading) {
//   loadUser(dispatch);
// }

// 'watch' state.token and set headers and local storage on any change
//  useEffect(() => {
//     setAuthToken(state.token);
//   }, [state.token]);

return (
  <AuthContext.Provider value={{ state: state, dispatch }}>
    {props.children}
  </AuthContext.Provider>
)
export default AuthState
