import Planner from "../Journey/Planner/Planner";
import React, { useState } from "react";
import GetAllStations from "../../services/GetAllStations";
import Overview from "../Journey/Overview/Overview";
import Detail from "../Journey/Detail/Detail";

function Homepage() {
  const [style, setStyle] = useState("homepage");
  const currentDate = new Date();

  const [allStations, setAllStations] = useState([]);
  const [trips, setTrips] = useState([]);
  const [tripView, setTripView] = useState();

  function importStations(data) {
    setAllStations(data);
  }

  function updateTrips(data) {
    setTrips(data);
  }

  function changeTripView(data) {
    setTripView(data);
  }

  const [inputFormData, setInputFormData] = useState({
    fromStation: "Putten",
    toStation: "Almere Centrum",
    requestDateTime: currentDate.toJSON(),
    timeIsArrival: false,
  });

  const [submittedInputFormData, setSubmittedInputFormData] = useState({});

  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  function changeInputFormData(event) {
    const { name, value } = event.target;
    setInputFormData((prevInputFormData) => {
      return {
        ...prevInputFormData,
        [name]: value,
      };
    });
  }

  function submitInputFormData() {
    setSubmittedInputFormData({ ...inputFormData });
    //execute call to API with values from inputFormData
  }

  function showJourney() {
    setFormIsSubmitted(true);
  }

  return (
    <div className={style}>
      <GetAllStations handler={importStations} />
      <div className="homepage--input">
        <Planner
          changeInputFormData={changeInputFormData}
          inputFormData={inputFormData}
          setInputFormData={setInputFormData}
          submitInputFormData={submitInputFormData}
          filterStation={allStations}
          handleSubmitClick={showJourney}
        />
      </div>
      {formIsSubmitted ? (
        <h2 className="homepage--reizen-title">Resultaten</h2>
      ) : null}
      <div
        className="homepage--reizen"
        onClick={() => setStyle("homepage on-button-click")}
      >
        {formIsSubmitted ? (
          <Overview
            fromStation={inputFormData.fromStation}
            toStation={inputFormData.toStation}
            dateTime={inputFormData.requestDateTime}
            timeIsArrival={inputFormData.timeIsArrival}
            submittedInputFormData={submittedInputFormData}
            searchForArrival={inputFormData.timeIsArrival}
            updateTrips={updateTrips}
            trips={trips}
            changeTripView={changeTripView}
          />
        ) : null}
      </div>
      <div className="homepage--journeyview">
        {tripView !== undefined && (
          <Detail legs={tripView.legs} tripView={tripView} />
        )}
      </div>
    </div>
  );
}

export default Homepage;
