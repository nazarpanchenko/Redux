import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateTaskInput extends Component {
    state = {
        value: ''
    };

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    handleTaskCreate = () => {
        this.props.handleTaskCreate(this.state.value);
        this.setState({ value: '' });
    };

    render() {
        return (
            <div className="create-task">
                <input
                    type="text"
                    value={this.state.value}
                    className="create-task__input"
                    onChange={this.handleChange}
                />
                <button
                    className="btn create-task__btn"
                    onClick={this.handleTaskCreate}
                >
                    Create
                </button>
            </div>
        );
    }
}

CreateTaskInput.propTypes = {
    handleTaskCreate: PropTypes.func.isRequired
};

export default CreateTaskInput;
