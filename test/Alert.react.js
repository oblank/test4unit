/**
 * Created by oBlank on 12/25/15.
 */

import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Alert from '../src/Alert.react';

describe('<Alert>', () => {
    it('insert Alert message', () => {
        let instance = ReactTestUtils.renderIntoDocument(
            <Alert>
                <strong>Message</strong>
            </Alert>
        );
        assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
    });
});