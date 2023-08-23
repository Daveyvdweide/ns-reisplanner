import { useEffect, useState, useRef } from 'react'

function GetAllStations(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        var url = "https://gateway.apiportal.ns.nl/reisinformatie-api/api/v2/stations";
        if (!hasFetchedData.current) {
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
                        props.handler(() => {
                            const changedArray = result.payload.map(station => {
                                return (
                                    {
                                        UICCode: station.UICCode,
                                        name: station.namen.lang
                                    }
                                )
                            })
                            return changedArray;
                        })
                    },
                    (error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
            hasFetchedData.current = true;
        }
    }, [props])

    if (error) {
        return <div className='API-message error'>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='API-message'>Loading...</div>;
    } else {
        return (null);
    }
}

export default GetAllStations;