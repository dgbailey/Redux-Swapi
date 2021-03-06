import axios from 'axios';


// we'll need axios
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_ERROR';
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure


export const fetchCharacters = () => dispatch =>{
    dispatch({type:FETCH_START});
    axios.get('https://swapi.co/api/people/')
        .then(resp =>
            
            dispatch({type:FETCH_SUCCESS,
                    payload:resp.data.results})
                   
                    
        )
        .catch( err =>
            dispatch({type:FETCH_FAILURE,
                        payload:err})
        )
}
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
