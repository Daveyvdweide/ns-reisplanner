import Reis from "../Reis/Reis";
import { useEffect, useState } from "react";

function Reizen(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let url = `https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/trips?fromStation=${props.fromStation}&toStation=${props.toStation}&dateTime=${props.dateTime}&searchForArrival=${props.searchForArrival}`;

    fetch(url, {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": "830049eb60c84c958c9692a2f9a8ba67",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          props.updateTrips(result.trips);
          console.log(result.trips);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.submittedInputFormData]);

  if (error) {
        return <div className="API-message error--no-margin error">Error: {error.message}</div>;
  } else if (!isLoaded) {
        return <div className="API-message error--no-margin">Loading...</div>;
  } else {
    return (
      <div className="reizen">
        <div className="reizen--container">
          {(props.trips !== undefined ? props.trips.map((trip, id) => (
            <Reis
              key={id}
              id={id}
              legs={trip.legs}
              trip={trip}
              changeTripView={props.changeTripView}
            />
            ))
            :
            <p className="reizen--no-result">Er zijn geen reizen gevonden.</p>
                    )}
        </div>
      </div>
    );
  }
}

export default Reizen;
