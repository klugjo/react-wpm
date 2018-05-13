import {connect, Dispatch} from 'react-redux';

import * as actions from '../actions';
import Root from '../components/Root';
import {IAppState} from '../types';

export const mapStateToProps = ({quotes}: IAppState) => {
  return {
    quotes
  };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestListOfQuotes: () => dispatch(actions.requestListOfQuotes())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
