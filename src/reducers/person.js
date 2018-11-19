//person reducer

const personReducerDefaultState = {
    name: '',
    email: '',
    videos:[],
    results:[]
  };
  
  export default (state = personReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return {
          ...state,
          name: action.name
        };
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.email
        };
      case 'SET_VIDEOS':
        return {
          ...state,
          videos: action.videos
        };
      case 'ADD__VIDEO':
        return {
          ...state,
          videos:[...state.videos,action.video]
        };
        case 'SET_RESULTS':
        return {
          ...state,
          results: action.videos
        };  
      default:
        return state;
    }
  };