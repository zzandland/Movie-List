import Redux from 'redux';

const fetchDetailReducer = (
  state = {
    isFetching: false 
  }, action
) => {
  switch (action.type) {
  
    case 'REQUEST_DETAILS':
      return Object.assign({}, state, {
        fetching: true
      });

    case 'RECEIVE_DETAILS':
      return Object.assign({}, state, {
        fetching: false,
        receivedAt: action.receivedAt
      });

  }
}
