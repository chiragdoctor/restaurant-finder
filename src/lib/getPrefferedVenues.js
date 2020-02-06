
export const getParticiatingUsers = (partcipatingUsers, users) => {
    return users.filter(user => {
        return partcipatingUsers.includes(user.name);
    });
}

export const getPrefferedVenues = (partcipatingUsers, users, venues) => {
    const userParticiapting = getParticiatingUsers(partcipatingUsers, users);
};
