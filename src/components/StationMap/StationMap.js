import { useState, useEffect } from "react";
import { Map, Marker } from "pigeon-maps"
import StationMapVertrektijden from "../StationMapVertrektijden/StationMapVertrektijden";

function StationMap() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [stations, setStations] = useState([]);
    const [clickedStation, setClickedStation] = useState(undefined);

    function updateStationModal(station) {
        setClickedStation(station);
    }

    useEffect(() => {
        var url = 'https://gateway.apiportal.ns.nl/places-api/v2/places?type=stationV2&limit=500&countries=NL';
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
                    setStations(result.payload[0].locations);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div className="API-message nav-margin error">Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className="API-message nav-margin">Loading...</div>;
    } else {
        return (
            <div className='leaflet-map'>

                {clickedStation !== undefined ?
                    <div className="station--information-modal">
                        <button onClick={() => { updateStationModal(undefined) }}>X</button>
                        <p>Station: {clickedStation.name}</p>
                        <a href={clickedStation.sites[0].url}>Meer informatie over dit station</a>
                        <StationMapVertrektijden UICCode={clickedStation.UICCode} />
                    </div>
                    : null
                }

                <Map height={980} defaultCenter={[52.08, 5.37]} defaultZoom={8}>
                    {stations.map((station, id) => (
                        <Marker
                            width={25}
                            anchor={[station.lat, station.lng]}
                            onClick={() => { updateStationModal(station) }}
                        />
                    ))}
                </Map>
            </div>
        );
    }
}

export default StationMap;