import React from "react";

const PlacesToGo = ({ placesToGo }) => {
    const venues = placesToGo.map(venue => <li key={venue.name}>{ venue.name }</li>);
    return (
        <div>
            <p id="places-to-go">Places to go:</p>
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