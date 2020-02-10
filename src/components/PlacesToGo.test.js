import React from 'react';
import { shallow } from 'enzyme';
import PlacesToGo from './PlacesToGo';

describe('<PlacesToGo />', () => {
    let wrapper;
    const placesToGo = [
        {
            name: "El Cantina",
        },
        {
            name: "Twin Dynasty",
        },
        {
            name: "Fabrique",
        }
    ]
    beforeEach(() => {
        wrapper = shallow(<PlacesToGo placesToGo={placesToGo} />);
    });

    it('should have a p tag with "Places to go:" text', () => {
        const p = wrapper.find('p');
        expect(p.length).toBe(1);
        expect(p.text()).toBe('Places to go:');
    });

    it('should have 3 lis as there are 3 options to go', () => {
        const li = wrapper.find('li');
        expect(li.length).toBe(3);

        expect(li.at(0).text()).toBe('El Cantina');
        expect(li.at(1).text()).toBe('Twin Dynasty');
        expect(li.at(2).text()).toBe('Fabrique');
    })

});

