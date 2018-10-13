import Redux from 'redux';

const sortListReducer = (state='all', action) => {
  switch (action.type) {
    case 'SORT_LIST':
      return action.sort;

    default:
      return state;
  }
}

export default sortListReducer;
