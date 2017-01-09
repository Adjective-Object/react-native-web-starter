import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import LoadingScreen from './LoadingScreen';
import MainView from './MainView';

const mapStateToProps = state => ({
  initialized: state.initializationState !== 'uninitialized',
});
const mapDispatchToProps = dispatch => ({});
const LoaderGatedApplication = ({ initialized }) => {
  return initialized ? <MainView /> : <LoadingScreen />;
};

LoaderGatedApplication.propTypes = { initialized: PropTypes.bool.isRequired };

export default connect(mapStateToProps, mapDispatchToProps)(
  LoaderGatedApplication,
);
