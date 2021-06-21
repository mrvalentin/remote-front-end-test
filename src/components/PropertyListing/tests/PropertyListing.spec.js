import React from 'react';
import {shallow, mount} from 'enzyme';
import PropertyListing from '../PropertyListing';

describe('PropertyListing', () => {

    it('should render without crashing', () => {
        const wrapper = shallow(<PropertyListing/>);
        expect(wrapper.find('.PropertyListing')).toHaveLength(1);
    });

    it('should render hundred property cards', async() => {
        const wrapper = mount(<PropertyListing/>);
        await (async () => {
            await Promise.resolve(wrapper);
            await new Promise(resolve => setImmediate(resolve));
            wrapper.update();
            expect(wrapper.find('PropertyCard')).toHaveLength(100);
        });
    });
});

