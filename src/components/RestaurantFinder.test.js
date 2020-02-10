import React from 'react';
import { shallow } from 'enzyme';
import RestaurantFinder from './RestaurantFinder';
import { users }  from '../data/users';
import { venues } from '../data/venues';
import { getMappedUsers, getMappedVenues } from "../lib/getPreferedVenues";
import User from "../components/User";
import PlacesToGo from "../components/PlacesToGo";
import PlacesToAviod from '../components/PlacesToAviod';
import { getPlacesToGo, getPlacesToAviod } from "../lib/getPreferedVenues";

const Venues = getMappedVenues(venues);
const Users = getMappedUsers(users);

describe('<RestaurantFinder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<RestaurantFinder users={Users} venues={Venues} />);
    });

    describe('Before user(s) selected', () => {
        it('should not have any section tag for "places-to-go"', () => {
            const p = wrapper.find('#places-to-go');
            expect(p.length).toBe(0);
        });
        
        it('should not have any P tag for "places-to-aviod"', () => {
            const p = wrapper.find('#places-to-aviod');
            expect(p.length).toBe(0);
        });
    
        it('should display users list as checkbox', () => {
            const usersList = wrapper.find(User);
            expect(usersList.length).toBe(1);
        });
    });

    describe('After user has been selected', () => {
        it('should generate food and drinks options for the user', () => {
            const addedUsers = ['David Lang'];
            wrapper.setState({addedUsers});
            const PlaceToGo = wrapper.find(PlacesToGo);
            const palcesToGo = getPlacesToGo(addedUsers, Users, Venues);
            expect(PlaceToGo.prop('placesToGo')).toEqual(palcesToGo);
        });

        it('should generate palces to aviod options', () => {
            const addedUsers = ['David Lang'];
            wrapper.setState({addedUsers});
            const PlaceToAviod = wrapper.find(PlacesToAviod);
            const palcesToAviod = getPlacesToAviod(addedUsers, Users, Venues);
            expect(PlaceToAviod.prop('placesToAviod')).toEqual(palcesToAviod);
        });
    });
});

