import { connect } from 'react-redux';
import Watched from '../components/Watched.js';
import sortList from '../actions/sortList.js';

const mapStateToProps = (state) => {
  return {
    sortStatus: state.sortList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sortList: status => {
      dispatch(sortList(status));
    }
  }
}

const WatchedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Watched);

export default WatchedContainer;
