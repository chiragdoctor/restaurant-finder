import React from "react";

const PlacesToAviod = ({ placesToAviod }) => {
    const formatVenuesAndPref = placesToAviod.map((place, index) => {
        return (
            <ul key={place.venue} className="venue-list">
                <li className="venue-item">{place.venue}</li>
                <ul className="pref-list">
                    {place.preferences.map(pref => <li className="user-pref" key={pref}>{pref}</li>)}
                </ul>
            </ul>
        )
    })
    return (
        <div>
            <p id="places-to-aviod">Places to aviod:</p>
            { formatVenuesAndPref }
        </div>
    )
}

PlacesToAviod.defaultProps = {
    placesToAviod: []
}

export default PlacesToAviod;