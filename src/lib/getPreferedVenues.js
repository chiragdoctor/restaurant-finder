export const getParticiatingUsers = (partcipatingUsers, users) => {
    return users.filter(user => {
        return partcipatingUsers.includes(user.name);
    });
};

export const getPlacesToGo = (addedUsers, users, venues) => {
    // Gets all the participating users objects.   
    const usersParticiapting = getParticiatingUsers(addedUsers, users);
    let canEatVenues = [...venues];
    usersParticiapting.forEach(user => {
        // Get all the places where particiating users can eat at. 
        canEatVenues = canEatVenues.filter(venue => {
            const hasFood = venue.food.filter(food => !user.wont_eat.includes(food));
            const hasDrinks = venue.drinks.filter(drink => user.drinks.includes(drink));
            return hasFood.length >= 1;
    
        });
        // Get all the places where particiating users can eat and drink at. Using the filtered venues to get the drink options. 
        canEatVenues = canEatVenues.filter(venue => {
            const hasDrinks = venue.drinks.filter(drink => user.drinks.includes(drink));
            return hasDrinks.length >= 1;
        });
    });
    return canEatVenues;
};

export const getPlacesToAviod = (addedUsers, users, venues) => {
    const usersParticiapting = getParticiatingUsers(addedUsers, users);
    let cannotEatVenues = [];
    venues.forEach(venue => {
        usersParticiapting.forEach(user => {
            const firstName = user.name.split(' ')[0];
            let userPref;
            const hasNoFoodToEat = venue.food.filter(food => !user.wont_eat.includes(food));
            const hasNoDrinks = venue.drinks.filter(drink => user.drinks.includes(drink));
            if(hasNoFoodToEat.length === 0 || hasNoDrinks.length === 0) {
                userPref = hasNoFoodToEat.length === 0 ? 
                                `There is nothing for ${firstName} to eat` : 
                                `There is nothing for ${firstName} to drink`
                const existingVenue = cannotEatVenues.find(cannotEatVenue => cannotEatVenue.venue === venue.name);
                if(existingVenue) {
                    existingVenue.preferences.push(userPref);
                } else {
                    userPref = hasNoFoodToEat.length === 0 ? [`There is nothing for ${firstName} to eat`] : [`There is nothing for ${firstName} to drink`] 
                    cannotEatVenues.push({
                        venue: venue.name,
                        preferences: userPref
                    })
                }
            }
        });
    });
    return cannotEatVenues; 
} 
