function Verstoring(props) {
    return (
        <div className="verstoring" onClick={() => {
            props.updateDisruption(props.id);
            props.handleClick();
        }}>
            {props.type === "DISRUPTION" ?
                <div>
                    <div className="verstoring--header">
                        <div className="verstoring--title">
                            {props.title.split(';').map(str => <h3 key={str}>{str.replace("-", " - ")}</h3>)}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.253 27">
                            <path id="Icon_ionic-ios-warning" data-name="Icon ionic-ios-warning" d="M16.095,5.618,3.642,28.343A2.137,2.137,0,0,0,5.548,31.5H30.459a2.142,2.142,0,0,0,1.905-3.157L19.905,5.618A2.183,2.183,0,0,0,16.095,5.618Zm3.143,9.429-.253,8.578H17.016l-.253-8.578ZM18,28.294A1.295,1.295,0,1,1,19.343,27,1.306,1.306,0,0,1,18,28.294Z" transform="translate(-3.375 -4.5)" fill="#f80000" />
                        </svg>
                    </div>

                    <div className="verstoring--content">
                        {props.cause && <h4>Oorzaak</h4>}
                        {props.cause && <p>{props.cause}</p>}
                        {props.expected && <h4>Verwachting</h4>}
                        {props.expected && <p>{props.expected}</p>}
                        {props.additionalTravelTimeShort && <h4>Extra reistijd</h4>}
                        {props.additionalTravelTimeShort && <p>+{props.additionalTravelTimeShort} minuten</p>}
                    </div>
                </div>
                : props.type === "MAINTENANCE" ?
                    <div>
                        <div className="verstoring--header">
                            <div className="verstoring--header-left">
                                <p className="verstoring--cause">{props.cause}</p>
                                <div className="verstoring--title">
                                    {props.title.split(';').map(str => <h3 key={str}>{str}</h3>)}
                                </div>
                            </div>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.164 27">
                                <path id="Icon_material-build" data-name="Icon material-build" d="M28.241,23.718,17.022,12.5a7.913,7.913,0,0,0-1.849-8.507A8.15,8.15,0,0,0,6.05,2.39l5.3,5.3-3.7,3.7-5.425-5.3a7.945,7.945,0,0,0,1.6,9.123,7.913,7.913,0,0,0,8.507,1.849L23.556,28.28a1.192,1.192,0,0,0,1.726,0l2.836-2.836a1.111,1.111,0,0,0,.123-1.726Z" transform="translate(-1.433 -1.65)" fill="rgb(255, 145, 0)" />
                            </svg>
                        </div>
                        <div className="verstoring--content">
                            {props.when && <h4>Wanneer</h4>}
                            {props.when && <p>t/m{props.when.split("t/m").slice(1)}</p>}
                            {props.advice && <h4>Advies</h4>}
                            {props.advice && <p>{props.advice}</p>}
                            {props.additionalTravelTimeShort && <h4>Extra reistijd</h4>}
                            {props.additionalTravelTimeShort && <p>+{props.additionalTravelTimeShort} minuten</p>}
                        </div>

                    </div>
                    :
                    <div>
                        <div className="verstoring--title">
                            {props.title.split(';').map(str => <h4 key={str}>{str}</h4>)}
                        </div>
                    </div>
            }
        </div>
    );
}

export default Verstoring;