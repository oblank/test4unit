/**
 * Created by oBlank on 12/25/15.
 */
import React from 'react';

const Alert = React.createClass({
    render() {
        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
});

export default Alert;