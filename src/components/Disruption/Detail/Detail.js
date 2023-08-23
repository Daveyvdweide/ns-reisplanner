function Detail(props) {
    const disruption = props.item;
    var markup;

    markup = <p></p>;

    if (disruption.type === 'CALAMITY') {
        markup = (
            <div className={`verstoringview ${props.style.disruptionView}`}>
                <button className={`verstoringen--button ${props.backbuttonstyle}`} onClick={props.changeDisruptionPageToList}>
                    &#129168; Terug
                </button>
                <div className="verstoringview--calamity">
                    <h2>{disruption.title}</h2>
                    <p>{disruption.description}</p>
                    {/* <Link to="/">
                        <button>Plan je reis</button>
                    </Link>  */}

                </div>
            </div>
        )
    }
    if (disruption.type === 'DISRUPTION') {
        markup = (
            <div className={`verstoringview ${props.style.disruptionView}`}>
                <button className={`verstoringen--button ${props.backbuttonstyle}`} onClick={props.changeDisruptionPageToList}>
                    &#129168; Terug
                </button>
                <div className="verstoringview--header">
                    <div className="verstoringview--header-title">
                        {disruption.title.split(';').map(str => <h2 key={str}>{str.replace("-", " - ")}</h2>)}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29.253" height="27" viewBox="0 0 29.253 27">
                        <path id="Icon_ionic-ios-warning" data-name="Icon ionic-ios-warning" d="M16.095,5.618,3.642,28.343A2.137,2.137,0,0,0,5.548,31.5H30.459a2.142,2.142,0,0,0,1.905-3.157L19.905,5.618A2.183,2.183,0,0,0,16.095,5.618Zm3.143,9.429-.253,8.578H17.016l-.253-8.578ZM18,28.294A1.295,1.295,0,1,1,19.343,27,1.306,1.306,0,0,1,18,28.294Z" transform="translate(-3.375 -4.5)" fill="#f80000" />
                    </svg>
                </div>

                <div className="verstoringview--content">
                    {disruption.timespans[0].cause &&
                        <div className="verstoringview--item">
                            <h3>Oorzaak</h3>
                            <p>{disruption.timespans[0].cause.label}</p>
                        </div>
                    }
                    {disruption.timespans[0].situation &&
                        <div className="verstoringview--item">
                            <h3>Gevolg</h3>
                            <p>{disruption.timespans[0].situation.label}</p>
                        </div>
                    }
                    {disruption.expectedDuration &&
                        <div className="verstoringview--item">
                            <h3>Verwachte duur</h3>
                            <p>{disruption.expectedDuration.description}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }

    if (disruption.type === 'MAINTENANCE') {
        markup = (
            <div className={`verstoringview ${props.style.disruptionView}`}>
                <button className={`verstoringen--button ${props.backbuttonstyle}`} onClick={props.changeDisruptionPageToList}>
                    &#129168; Terug
                </button>
                <div className="verstoringview--header">
                    <div className="verstoringview--header-title">
                        <p className="verstoring--cause">{disruption.timespans[0].cause.label}</p>
                        {disruption.title.split(';').map(str => <h2 key={str}>{str}</h2>)}
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.164 27">
                        <path id="Icon_material-build" data-name="Icon material-build" d="M28.241,23.718,17.022,12.5a7.913,7.913,0,0,0-1.849-8.507A8.15,8.15,0,0,0,6.05,2.39l5.3,5.3-3.7,3.7-5.425-5.3a7.945,7.945,0,0,0,1.6,9.123,7.913,7.913,0,0,0,8.507,1.849L23.556,28.28a1.192,1.192,0,0,0,1.726,0l2.836-2.836a1.111,1.111,0,0,0,.123-1.726Z" transform="translate(-1.433 -1.65)" fill="rgb(255, 145, 0)" />
                    </svg>
                </div>

                <div className="verstoringview--content">
                    {disruption.timespans[0].period &&
                        <div className="verstoringview--item">
                            <h3>Wanneer</h3>
                            <p>{disruption.timespans[0].period}</p>
                        </div>
                    }

                    {disruption.timespans[0].additionalTravelTime &&
                        (disruption.timespans[0].additionalTravelTime.maximumDurationInMinutes &&
                            <div className="verstoringview--item">
                                <h3>Extra reistijd</h3>
                                <p>{disruption.timespans[0].additionalTravelTime.label}</p>
                            </div>
                        )
                    }

                    {disruption.timespans[0].situation &&
                        <div className="verstoringview--item">
                            <h3>Gevolg</h3>
                            <p>{disruption.timespans[0].situation.label}</p>
                        </div>
                    }

                    {disruption.timespans[0].advices[0] &&
                        <div className="verstoringview--item">
                            <h3>Advies</h3>
                            <p>{disruption.timespans[0].advices[0]}</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
    return markup;
}

export default Detail;