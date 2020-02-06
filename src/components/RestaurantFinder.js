import React, { Component } from "react";
import Users from "./User";
import { getPrefferedVenues } from "../lib/getPrefferedVenues";

class RestarantFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partcipatingUsers: []
        }
    }

    handleUserSelected = ({ target }) => {
        if(target.checked) {
            this.setState({ partcipatingUsers: [...this.state.partcipatingUsers, target.value] });
        } else {
            const removeUsersList = this.state.partcipatingUsers.filter(user => user !== target.value);
            this.setState({ partcipatingUsers: removeUsersList });
        }
    }

    render() {
        const { users, venues } = this.props;
        const { partcipatingUsers } = this.state;
        const prefferedVenues = getPrefferedVenues(partcipatingUsers, users, venues);
        return (
            <div>
                <section id="user-section">
                    <Users onUserSelected={this.handleUserSelected} users={users} />
                </section>
                <hr />


            </div>
        )
    }
}

export default RestarantFinder;