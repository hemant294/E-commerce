const initialState = {
    fullName: null,
    userName: null,
    email: null,
    isLogin: false,
  };
  
  const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_CURRENT_USER":
        return { ...state, ...action.payload };
  
      case "REMOVE_CURRENT_USER":
        localStorage.removeItem("user-info");
        return initialState;
  
      default:
        const user = localStorage.getItem("user-info");
        const token = localStorage.getItem("auth-token");
        if (user && token) {
          let userInfo = JSON.parse(user);
          return { ...state, ...userInfo, isLogin: true };
        }
        return state;
    }
  };
  
  export default currentUserReducer;
  