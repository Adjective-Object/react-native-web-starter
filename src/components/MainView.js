import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import addBodyText from '../actions/add-text';
import removeBodyText from '../actions/remove-text';
import MainViewMarkup from './MainViewMarkup';

const mapStateToProps = state => ({ text: state.text });
const mapDispatchToProps = dispatch => ({
  addBodyText: () => dispatch(addBodyText()),
  removeBodyText: () => dispatch(removeBodyText()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainViewMarkup);
