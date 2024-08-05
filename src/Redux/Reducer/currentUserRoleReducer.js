const initialState = {
    isUser: false,
    isAdmin: false,
  };
  
  const setRole = (state, action) => {
    if (action.payload === "Admin") {
      return { ...state, isAdmin: true, isUser: false };
    } else if (action.payload === "User") {
      return { ...state, isUser: true, isAdmin: false };
    } else {
      return initialState;
    }
  };
  
  const currentUserRoleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_ROLE":
        return setRole(state, action);
  
      case "REMOVE_ROLE":
        localStorage.removeItem("user-role");
        return initialState;
  
      default:
        const role = localStorage.getItem("user-role");
        if (role) {
          return setRole(state, { payload: role });
        }
        return state;
    }
  };
  
  export default currentUserRoleReducer;
  