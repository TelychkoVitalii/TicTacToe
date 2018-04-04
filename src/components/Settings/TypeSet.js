import React, { Component } from 'react';
import '../../styles/TypeSet.css';

class TypeSet extends Component {
    render() {
        return (
            <div className="setUp">
                <h2 className='blockTitle'>Your type</h2>
                <select type='text'
                        id='changeType'
                        onChange={this.props.onTypeChanged}>
                    <option disabled selected>Choose your figure</option>
                    <option>X</option>
                    <option>O</option>
                </select>
            </div>
        );
    }
}

export default TypeSet;