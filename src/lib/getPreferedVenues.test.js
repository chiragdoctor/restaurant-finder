import { getParticiatingUsers, getPlacesToGo, getPlacesToAviod } from './getPreferedVenues';
import { users } from "../data/Users";
import { venues } from "../data/Venues";

const Venues = venues.map(venue => {
    return {
        name: venue.name,
        food: venue.food.map(food => food.toLowerCase()),
        drinks: venue.drinks.map(drink => drink.toLowerCase()),
    }
});

const Users = users.map(user => {
    return {
        name: user.name,
        wont_eat: user.wont_eat.map(food => food.toLowerCase()),
        drinks: user.drinks.map(drink => drink.toLowerCase())
    }
});

describe('getParticiatingUsers', () => {
    
    it('should have no participating Users', () => {
        const participatingUsers = getParticiatingUsers([], Users);
        expect(participatingUsers.length).toBe(0)
    });

    it(`should get participating Users from Users list`, () => {
        const addedUsers = ['John Davis', 'Gary Jones'];
        const participatingUsers = getParticiatingUsers(addedUsers, Users);
        expect(participatingUsers.length).toBe(2)
        expect(participatingUsers[0].name).toBe(addedUsers[0]);    
        expect(participatingUsers[1].name).toBe(addedUsers[1]);
    })
});

describe('getPlacesToGo', () => {
    it('should just remove eating option "El Cantina" as Bobby Robson wont eat Mexican food but can drink at all other places', () => {
        const addedUsers = ['Bobby Robson'];
        const placesToGo = getPlacesToGo(addedUsers, Users, Venues);
        expect(placesToGo.length).toBe(8);
        placesToGo.forEach(place => {
            // Doesn't eat Mexican food, hence removed "El Cantina" from the list. 
            expect(place.name).not.toBe(Venues[0].name);
        });
    });

    it('should remove drinking option "Fabrique" and eating option "Twin Dynasty" for David Lang', () => {
        const addedUsers = ['David Lang'];
        const placesToGo = getPlacesToGo(addedUsers, Users, Venues);
        expect(placesToGo.length).toBe(7);
        placesToGo.forEach(place => {
            // Doesn't eat Chinese food, hence removed "Twin Dynasty" from the list.
            expect(place.name).not.toBe(Venues[1].name);
            // No drinking option in Fabrique, hence removed "Fabrique" from the list.
            expect(place.name).not.toBe(Venues[8].name);
        });
    });

    it('should not remove any eating or drinking option as Gavin eats all cuisines and  has drinking options at all the places', () => {
        const addedUsers = ['Gavin Coulson'];
        const placesToGo = getPlacesToGo(addedUsers, Users, Venues);
        expect(placesToGo.length).toBe(9);
    });

    it('should not remove any eating or drinking options for John Davis who does not eat fish as there are other food options servered', () => {
        const addedUsers = ['John Davis'];
        const placesToGo = getPlacesToGo(addedUsers, Users, Venues);
        expect(placesToGo.length).toBe(9);
    });
});

describe('PlacesToAviod', () => {
    it('should just remove eating option "El Cantina" as Bobby Robson wont eat Mexican food', () => {
        const addedUsers = ['Bobby Robson'];
        const placesToAviod = getPlacesToAviod(addedUsers, Users, Venues);
        expect(placesToAviod.length).toBe(1);
        expect(placesToAviod[0].venue).toBe(Venues[0].name);
    });

    it('should remove drinking option "Fabrique" and eating option "Twin Dynasty" for David Lang', () => {
        const addedUsers = ['David Lang'];
        const placesToAviod = getPlacesToAviod(addedUsers, Users, Venues);
        expect(placesToAviod.length).toBe(2);
        expect(placesToAviod[0].venue).toBe(Venues[1].name);
        expect(placesToAviod[0].preferences[0]).toBe('There is nothing for David to eat');
        expect(placesToAviod[1].venue).toBe(Venues[8].name);
        expect(placesToAviod[1].preferences[0]).toBe('There is nothing for David to drink');
    });

    it('should not remove any eating or drinking option as Gavin eats all cuisines and  has drinking options at all the places', () => {
        const addedUsers = ['Gavin Coulson'];
        const placesToAviod = getPlacesToAviod(addedUsers, Users, Venues);
        expect(placesToAviod.length).toBe(0);
    });

    it('should not remove any eating or drinking options for John Davis who does not eat fish as there are other food options servered', () => {
        const addedUsers = ['Gavin Coulson'];
        const placesToAviod = getPlacesToAviod(addedUsers, Users, Venues);
        expect(placesToAviod.length).toBe(0);
    });
});
