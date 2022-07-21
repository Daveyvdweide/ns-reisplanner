import { useState, useEffect } from "react";
import Verstoring from "../Verstoring/Verstoring";
import VerstoringView from "../VerstoringView/VerstoringView";

function Verstoringen() {
    const disruptionListStyle = {
        disruptionsList: '',
        disruptionView: 'verstoringpage--invisible',
        disruptionTitle: '',
        disruptionBackButton: 'verstoringbutton--invisible'
    }

    const disruptionviewStyle = {
        disruptionsList: 'verstoringpage--invisible',
        disruptionView: '',
        disruptionTitle: 'verstoringen--hide-title',
        disruptionBackButton: ''
    }



    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);

    const [disruptionStyles, setDisruptionStyles] = useState(disruptionListStyle);

    function updateDisruption(key) {
        setSelectedItem(items[key]);
    }

    function changeDisruptionPageToView() {
        setDisruptionStyles(disruptionviewStyle)
    }

    function changeDisruptionPageToList() {
        setDisruptionStyles(disruptionListStyle)
    }

    useEffect(() => {
        var url = 'https://gateway.apiportal.ns.nl/reisinformatie-api/api/v3/disruptions?isActive=true';
        fetch(url, {
            method: 'GET',
            headers: {
                "Ocp-Apim-Subscription-Key": process.env.REACT_APP_NS_API_KEY,
                Accept: 'application/json',
            },
        }).then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    var notCalamity = [];
                    var calamity = [];
                    setIsLoaded(true);
                    for (let i = 0; i < result.length; i++) {
                        if (result[i].type !== "CALAMITY") {
                            notCalamity.push(result[i]);
                        } else {
                            calamity.push(result[i]);
                        }
                    }
                    for (let i = 0; i < calamity.length; i++) {
                        notCalamity.push(calamity[i]);
                    }
                    setItems(notCalamity);
                    setSelectedItem(notCalamity[0]);
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
            <div className="verstoringen">
                <h2 className={disruptionStyles.disruptionTitle}>Verstoringen</h2>

                <div className={`verstoringen--container ${disruptionStyles.disruptionsList}`}>
                    {items.map((item, id) => (
                        <Verstoring
                            updateDisruption={updateDisruption}
                            key={id}
                            id={id}
                            type={item.type}
                            title={item.title}
                            period={item.period}
                            description={item.description}
                            cause={item.timespans && item.timespans[0].cause.label}
                            expected={item.expectedDuration && item.expectedDuration.description}
                            additionalTravelTime={item.type !== "CALAMITY" && (item.timespans[0].additionalTravelTime && item.timespans[0].additionalTravelTime.label)}
                            additionalTravelTimeShort={item.type !== "CALAMITY" && (item.timespans[0].additionalTravelTime && item.timespans[0].additionalTravelTime.maximumDurationInMinutes)}
                            advice={item.type !== "CALAMITY" && item.timespans[0].advices[0]}
                            when={item.type !== "CALAMITY" && item.timespans[0].period}
                            handleClick={changeDisruptionPageToView}

                        />
                    ))}
                </div>
                <VerstoringView item={selectedItem} style={disruptionStyles} handleClick={changeDisruptionPageToList}
                    backButtonStyle={disruptionStyles.disruptionBackButton}
                    changeDisruptionPageToList={changeDisruptionPageToList} />
            </div>
        );
    }
}

export default Verstoringen;