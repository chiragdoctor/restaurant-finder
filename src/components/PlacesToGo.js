import React from "react";

const PlacesToGo = ({ placesToGo }) => {
    const venues = placesToGo.map(venue => <li key={venue.name}>{ venue.name }</li>);
    return (
        <div>
            Places to go: 
            <ul>
                { venues }     
            </ul>
        </div>
    )
}

PlacesToGo.defaultProps = {
    placesToGo: []
}

export default PlacesToGo;