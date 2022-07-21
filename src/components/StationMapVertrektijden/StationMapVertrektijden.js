import { useState, useEffect } from "react";

function StationMapVertrektijden(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [departures, setDepartures] = useState([]);

    useEffect(() => {
        var url = `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/departures?uicCode=${props.UICCode}&maxJourneys=5`;
        fetch(url, {
            method: 'GET',
            headers: {
                "Ocp-Apim-Subscription-Key": process.env.REACT_APP_NS_API_KEY,
                Accept: 'application/json',
            },
        }).then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setDepartures(result.payload.departures);
                    console.log(result.payload.departures);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [props])

    if (error) {
        return <div className="API-message nav-margin error">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="API-message nav-margin">Loading...</div>;
    } else {
        return (
            <div>
                {departures.map((departure, id) => (
                    <p>Trein naar {departure.direction} vertrekt om {departure.plannedDateTime}</p>
                ))}
            </div>
        );
    }
}

export default StationMapVertrektijden;