import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_JOKE_START';
export const FETCH_DATA_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_JOKE_FAILURE';

export const fetchScorers = id => dispatch => {
    dispatch({ type: FETCH_DATA_START });
    // fetch DATA
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.football-data.org//v2/competitions/${id}/scorers?season=2018`, {
        headers: { 'X-Auth-Token': '3ced95ba91f3446c91244b71002cddbd' }
        }
      )
      .then(res => {
        console.log("SUCCESFULLY GOT DATA", res)
        dispatch({ type: FETCH_DATA_SUCCESS, payload: res });
      })
      .catch(err => {
          console.log("OH AN ERROR HAPPENED", err)
          dispatch({type: FETCH_DATA_FAILURE, payload: err})
        });
  };
