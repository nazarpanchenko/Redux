import React from 'react';
import { connect } from 'react-redux';
import { availableOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

const mapStateToProps = state => {
    return {
        options: availableOptionsSelector(state)
    }
};

const mapDispatch = {
    moveOption: toggleOption
};

export default connect(mapStateToProps, mapDispatch)(Options);