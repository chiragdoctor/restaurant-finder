import React from 'react';
import { shallow } from 'enzyme';
import PlacesToAviod from './PlacesToAviod';

describe('<PlacesToAviod />', () => {
    let wrapper;
    const placesToAviod = [
        {
            venue: "El Cantina",
            preferences: ["There is nothing for Bobby to eat"]
        },
        {
            venue: "Twin Dynasty",
            preferences: ["There is nothing for David to eat"]
        },
        {
            venue: "Fabrique",
            preferences: ["There is nothing for David to drink"]
        }
    ]
    beforeEach(() => {
        wrapper = shallow(<PlacesToAviod placesToAviod={placesToAviod} />);
    });

    it('should have a p tag with "Places to aviod:" text', () => {
        const p = wrapper.find('p');
        expect(p.length).toBe(1);
        expect(p.text()).toBe('Places to aviod:');
    });

    it('should have li tag for as there are 3 places to aviod', () => {
        const liVenues = wrapper.find('.venue-item');
        
        expect(liVenues.length).toBe(3);

        expect(liVenues.at(0).text()).toBe("El Cantina");
        expect(liVenues.at(1).text()).toBe("Twin Dynasty");
        expect(liVenues.at(2).text()).toBe("Fabrique");
    });

    it('should have li tag each for for pref', () => {
        const liPref = wrapper.find('.user-pref');
        expect(liPref.length).toBe(3);

        expect(liPref.at(0).text()).toBe("There is nothing for Bobby to eat");
        expect(liPref.at(1).text()).toBe("There is nothing for David to eat");
        expect(liPref.at(2).text()).toBe("There is nothing for David to drink");
    });
});

