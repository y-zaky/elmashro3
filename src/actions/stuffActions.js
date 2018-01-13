import * as types from './actionTypes';

function url() {
  return 'www.url.com';
}

export function receiveStuff(json) {
  return {type: types.RECEIVE_STUFF, stuff: json.stuff};
}

export function fetchStuff() {
  return dispatch => {
    return fetch(url('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo'), {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        // 'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveStuff(json)));
    // .catch(err => console.log(err)) ;
  };
}