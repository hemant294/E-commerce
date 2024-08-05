export const currentUser = (value) => ({
    type: "SET_CURRENT_USER",
    payload: value
})

export const removeCurrentUser = () => ({
    type: "REMOVE_CURRENT_USER",
})
