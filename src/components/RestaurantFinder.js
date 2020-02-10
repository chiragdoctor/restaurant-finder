import React, { Component } from "react";
import PropTypes from 'prop-types';
import Users from "./User";
import { getPlacesToGo, getPlacesToAviod } from "../lib/getPreferedVenues";
import PlacesToGo from "./PlacesToGo";
import PlacesToAviod from "./PlacesToAviod";

class RestarantFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addedUsers: []
        }
    }

    handleUserSelected = ({ target }) => {
        if(target.checked) {
            this.setState({ addedUsers: [...this.state.addedUsers, target.value] });
        } else {
            const removeUsersList = this.state.addedUsers.filter(user => user !== target.value);
            this.setState({ addedUsers: removeUsersList });
        }
    }

    render() {
        const { users, venues } = this.props;
        const { addedUsers } = this.state;
        const placesToGo = getPlacesToGo(addedUsers, users, venues);
        const placesToAviod = getPlacesToAviod(addedUsers, users, venues);

        return (
            <div>
                <section id="user-section">
                    <Users onUserSelected={this.handleUserSelected} users={users} />
                </section>
                <hr />
                { addedUsers.length > 0 ? 
                <section id="places-to-go">
                    <PlacesToGo placesToGo={placesToGo} /> 
                </section>
                : <div />}
                
                
                { addedUsers.length > 0 && placesToAviod.length > 0 ? 
                <section id="places-to-aviod">
                    <PlacesToAviod placesToAviod={placesToAviod} /> 
                </section>
                : <div />}
                
                
            </div>
        )
    }
}

RestarantFinder.propTypes = {
    users: PropTypes.array.isRequired,
    venues: PropTypes.array.isRequired,
};

export default RestarantFinder;