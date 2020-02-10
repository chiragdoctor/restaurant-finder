import React, { Component } from "react";
import Users from "./User";
import { getPlacesToGo } from "../lib/getPreferedVenues";
import PlacesToGo from "./PlacesToGo";

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
        return (
            <div>
                <section id="user-section">
                    <Users onUserSelected={this.handleUserSelected} users={users} />
                </section>
                <hr />
                { addedUsers.length > 0 ? <PlacesToGo placesToGo={placesToGo} /> : <div />}
            </div>
        )
    }
}

export default RestarantFinder;