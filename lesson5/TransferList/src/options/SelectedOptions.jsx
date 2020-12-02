import React from 'react';
import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapStateToProps = state => {
    return {
        options: selectedOptionsSelector(state)
    }
};

const mapDispatch = {
    moveOption: toggleOption
};

export default connect(mapStateToProps, mapDispatch)(Options);