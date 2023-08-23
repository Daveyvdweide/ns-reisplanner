function Detail(props) {
  const lastLegIndex = props.legs.length - 1;
  const lastStopIndex = props.legs[lastLegIndex].stops.length - 1;

  const departureTime = props.legs[0].origin.plannedDateTime.substring(
    props.legs[0].origin.plannedDateTime.indexOf("T") + 1,
    props.legs[0].origin.plannedDateTime.lastIndexOf("+") - 3
  );

  const arrivalTime = props.legs[lastLegIndex].stops[
    lastStopIndex
  ].plannedArrivalDateTime.substring(
    props.legs[lastLegIndex].stops[
      lastStopIndex
    ].plannedArrivalDateTime.indexOf("T") + 1,
    props.legs[lastLegIndex].stops[
      lastStopIndex
    ].plannedArrivalDateTime.lastIndexOf("+") - 3
  );

  console.log(props.tripView);
  console.log(props.legs);

  const tripView = props.tripView;

  return (
    <div className="journeyview">


      {tripView ? (
        <div>
          <div className="journeyview--top">
            <div className="journeyview--top-left">
              <p className="journeyview--top-label">Vertrek</p>
              <p className="journeyview--top-label">{" "}</p>
              <p className="journeyview--top-label">Aankomst</p>
              <p className="journeyview--top-time">{departureTime}</p>
              <p className="journeyview--top-time">&#129030;</p>
              <p className="journeyview--top-time">{arrivalTime}</p>
            </div>
            <div className="journeyview--top-right">
              <div className="journeyview--top-right-container">
                <p>
                  &#128337; {props.tripView.plannedDurationInMinutes} minuten
                </p>
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12">
                    <path d="M8.586,3.879a2.5,2.5,0,1,0-.707.707L13,9.707V8.293ZM7.561,3.561a1.5,1.5,0,1,1,0-2.121A1.491,1.491,0,0,1,7.561,3.561ZM6.5,7a2.5,2.5,0,0,0-1.379.414L0,2.293V3.707L4.414,8.121A2.5,2.5,0,1,0,6.5,7Zm1.061,3.561A1.5,1.5,0,0,1,5.439,8.44h0a1.5,1.5,0,1,1,2.122,2.121Z"></path>
                  </svg>
                  {props.tripView.transfers}x overstappen
                </p>
              </div>
              <div className="journeyview--top-plannedtrack">{props.legs[0].origin.plannedTrack}</div>
            </div>
          </div>
          <br />

          <div className="journeyview--leg-items-container">


            {tripView.legs.map((leg, id) => {
              const crowdStyle =
                leg.crowdForecast === "LOW"
                  ? "crowd-low"
                  : leg.crowdForecast === "MEDIUM"
                    ? "crowd-medium"
                    : "crowd-high";

              return (
                <div className="journeyview--leg-item" key={id}>

                  <div className="journeyview--leg-item-top">
                    <div className="journeyview--leg-item-top-left">
                      <p className="journeyview--leg-item-top-time">
                        {leg.origin.plannedDateTime.substring(
                          leg.origin.plannedDateTime.indexOf("T") + 1,
                          leg.origin.plannedDateTime.lastIndexOf("+") - 3
                        )}
                      </p>
                      {id === 0 && <p className="journeyview--leg-item-station">{leg.origin.name}</p>}
                    </div>
                    <div className="journeyview--leg-item-top-right">
                      <p className="journeyview--leg-item-departuretrack"> Spoor {leg.origin.plannedTrack}</p>
                    </div>
                  </div>

                  <div className="journeyview--leg-item-center">
                    <div className="journeyview--leg-item-center-left">
                      <p>{leg.product.displayName}</p>
                      <p>Richting {leg.direction}</p>
                    </div>
                    <div className="journeyview--leg-item-center-right">
                      {/* <p>{leg.crowdForecast}</p> */}
                      <p>
                        <svg
                          className={crowdStyle}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 57.591 36.649"
                        >
                          <path
                            id="Icon_material-people-outline"
                            data-name="Icon material-people-outline"
                            d="M42.076,28.442A31.378,31.378,0,0,0,30.3,31.06a30.88,30.88,0,0,0-11.78-2.618C12.835,28.442,1.5,31.27,1.5,36.95v7.2H59.091v-7.2C59.091,31.27,47.756,28.442,42.076,28.442ZM31.6,40.222H5.427V36.95c0-1.414,6.7-4.581,13.089-4.581S31.6,35.537,31.6,36.95Zm23.56,0H35.531V36.95a4.763,4.763,0,0,0-1.361-3.194,25.255,25.255,0,0,1,7.906-1.387c6.387,0,13.089,3.168,13.089,4.581Zm-36.649-14.4a9.162,9.162,0,1,0-9.162-9.162A9.172,9.172,0,0,0,18.516,25.825Zm0-14.4a5.236,5.236,0,1,1-5.236,5.236A5.251,5.251,0,0,1,18.516,11.427Zm23.56,14.4a9.162,9.162,0,1,0-9.162-9.162A9.172,9.172,0,0,0,42.076,25.825Zm0-14.4a5.236,5.236,0,1,1-5.236,5.236A5.251,5.251,0,0,1,42.076,11.427Z"
                            transform="translate(-1.5 -7.5)"
                          />
                        </svg>
                      </p>
                    </div>


                  </div>
                  <div className="journeyview--leg-item-bottom">
                    <div className="journeyview--leg-item-bottom-left">
                      <p className="journeyview--leg-item-bottom-time">
                        {leg.destination.plannedDateTime.substring(
                          leg.stops[
                            leg.stops.length - 1
                          ].plannedArrivalDateTime.indexOf("T") + 1,
                          leg.stops[
                            leg.stops.length - 1
                          ].plannedArrivalDateTime.lastIndexOf("+") - 3
                        )}
                      </p>
                      <p className="journeyview--leg-item-station">{leg.destination.name}</p>
                    </div>
                    <div className="journeyview--leg-item-bottom-right">
                      <p className="journeyview--leg-item-arrivaltrack">Spoor {leg.stops[leg.stops.length - 1].actualArrivalTrack}</p>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          {props.tripView.fares !== undefined && props.tripView.fares[0] !== undefined ?
            <div className="journeyview--prices">
              <h4>Prijzen</h4>
              <div className="journeyview--prices-container">
                <div className="journeyview--price">
                  <h5>&#x20AC; {((props.tripView.fares[0].priceInCents) / 100).toFixed(2)}</h5>
                  <p>Enkele reis, 1e klas</p>
                </div>
                <div className="journeyview--price">
                  <h5>&#x20AC; {((props.tripView.fares[1].priceInCents) / 100).toFixed(2)}</h5>
                  <p>Enkele reis, 2e klas</p>
                </div>
              </div>
            </div>
            : null
          }

        </div>
      ) : null
      }
    </div >
  );
}

export default Detail;
