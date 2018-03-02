export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  payload: '',
  notes: [],
  pieNotes: [],
  songs: [],
  playingSong: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case 'YOUTUBE':
    return  {
      ...state,
      payload : action.payload
    }

    case 'NOTE_CHANGE':
    //console.log(action)
    return {
      ...state,
      notes : [...action.payload]
    }

    case 'PIE_CHANGE':
    let pieNotes = constructPie(state,action);
    console.log(pieNotes)
    return {
      ...state,
      pieNotes: [...pieNotes]
    }


    case INCREMENT_REQUESTED:
    return {
      ...state,
      isIncrementing: true
    }

    case INCREMENT:
    return {
      ...state,
      count: state.count + 1,
      isIncrementing: !state.isIncrementing
    }

    case DECREMENT_REQUESTED:
    return {
      ...state,
      isDecrementing: true
    }

    case DECREMENT:
    return {
      ...state,
      count: state.count - 1,
      isDecrementing: !state.isDecrementing
    }

    default:
    return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const noteChange = (notes) => {
  //console.log(notes);
  return dispatch => {

    dispatch({
      type: 'NOTE_CHANGE',
      payload: notes
    })
  }
}

let pieData = [];

function constructPie(state, action){
  console.log(action);
  for (let i=0; i < pieData.length; i++){
    if (pieData[i].name === action.payload){
      pieData[i].value++
      return pieData;
    }
  }
  pieData.push({name:action.payload, value:1})
  return pieData;
}

export const pieChange = (notes) => {
  return dispatch => {

    dispatch({
      type: 'PIE_CHANGE',
      payload: notes
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const fetchYoutube = () => {
  console.log('hi');
  return dispatch => {
    fetchAsync()
    .then(data => {
      dispatch({
        type: 'YOUTUBE',
        payload : data
      })
    })
    .catch(reason => console.log(reason.message))
  }
}

async function fetchAsync () {
  var url = new URL("https://www.googleapis.com/youtube/v3/search"),
  //var url = new URL('https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails&id=UHdgXkkVyl0%2C+Xxsdw6zG1bg&key=AIzaSyA3IHL73MF00WFjgxdwzg57nI1CwW4dybQ'),
    query = {
        part: 'snippet',
        key: 'AIzaSyA3IHL73MF00WFjgxdwzg57nI1CwW4dybQ',
        maxResults: 6,
        type: 'video',
        q: 'twinkle twinkle'
    }
    Object.keys(query).forEach(key => url.searchParams.append(key, query[key]))
    //let url = 'https://api.github.com/users/dhh/repos'
    //console.log(url);
  let response = await fetch(url)
  //let response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyA3IHL73MF00WFjgxdwzg57nI1CwW4dybQ')
  // only proceed once promise is resolved
  let data = await response.json();
  console.log(data);
  // only proceed once second promise is resolved
  return data;
}

export const exampleFetch = () => {
  fetch('https://api.github.com/users/dhh/repos')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const fetchSongs = () => {
  return dispatch =>{

  }
}
