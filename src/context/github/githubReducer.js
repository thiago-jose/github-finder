const GithubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.users,
        loading: false
      }
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      }
    case 'DELETE_USERS':
      return {
        users: [],
        loading: false
      }
    default:
      return state
  }
}

export default GithubReducer