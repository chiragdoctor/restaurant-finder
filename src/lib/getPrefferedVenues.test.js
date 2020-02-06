import React from "react";
import { getParticiatingUsers } from './getPrefferedVenues';
import { users } from "../data";

describe('getParticiatingUsers', () => {
    
    it('should have no participating users', () => {
        const participatingUsers = getParticiatingUsers([], users);
        expect(participatingUsers.length).toBe(0)
    });

    it(`should get participating users from users list`, () => {
        const addedUsers = ['John Davis', 'Gary Jones'];
        const participatingUsers = getParticiatingUsers(addedUsers, users);
        expect(participatingUsers.length).toBe(2)
        expect(participatingUsers[0].name).toBe(addedUsers[0]);    
        expect(participatingUsers[1].name).toBe(addedUsers[1]);
    })
});
