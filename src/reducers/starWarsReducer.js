import {FETCH_START,FETCH_FAILURE,FETCH_SUCCESS} from  "../actions";
const initialState = {
  characters: [],
  fetching:false,
  error:null
  // Array characters, Boolean fetching, null error.
  //keep UI within component state
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_START:
      return{
        ...state,
        fetching:true

      }
      case FETCH_SUCCESS:
        return{
          ...state,
          fetching:false,
          characters:action.payload
        }

      case FETCH_FAILURE:
        return{
          fetching:false,
          error:action.payload
        }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
