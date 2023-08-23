import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import nlLocale from 'date-fns/locale/nl';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import DesktopTimePicker from '@mui/lab/DesktopTimePicker';

function Planner(props) {

    const handleChangeDateTime = (newValue) => {
        props.changeInputFormData({
            target: {
                name: "requestDateTime",
                value: newValue.toJSON()
            }
        })
    }

    function changeTimeDepartArrive(clickedButton) {
        props.setInputFormData(prevInputFormData => {
            return {
                ...prevInputFormData,
                timeIsArrival: (clickedButton === 'depart' ? false : true)
            }
        })
    }

    return (
        <div className="form">
            <input
                type="text"
                placeholder="Van station"
                className="form--fromstation"
                name="fromStation"
                list="fromStationFilter"
                value={props.inputFormData.fromStation}
                onChange={props.changeInputFormData}
            />

            <datalist
                id='fromStationFilter'
            >
                {props.filterStation.map((item, key) =>
                    <option key={key} value={item.name} />
                )}
            </datalist>

            <input
                type="text"
                placeholder="Naar station"
                className="form--tostation"
                name="toStation"
                list="toStationFilter"
                value={props.inputFormData.toStation}
                onChange={props.changeInputFormData}
            />

            <datalist
                id='toStationFilter'
            >
                {props.filterStation.map((item, key) =>
                    <option key={key} value={item.name} />
                )}
            </datalist>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={nlLocale}>
                <DatePicker
                    label="datum"
                    className='form--date'
                    type="date"
                    inputFormat="dd-MM-yyyy"
                    name="date"
                    mask="__-__-____"
                    value={props.inputFormData.requestDateTime}
                    onChange={handleChangeDateTime}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DesktopTimePicker
                    label="tijd"
                    className='form--time'
                    name="time"
                    value={props.inputFormData.requestDateTime}
                    onChange={handleChangeDateTime}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

            <button className={'form--depart-button' + (props.inputFormData.timeIsArrival === false ? " input--active" : "")} onClick={() => { changeTimeDepartArrive("depart") }}>Vertrek</button>

            <button className={'form--arrive-button' + (props.inputFormData.timeIsArrival === true ? " input--active" : "")} onClick={() => { changeTimeDepartArrive("arrive") }}>Aankomst</button>

            <div className="form--submit-button" onClick={() => { props.submitInputFormData(); props.handleSubmitClick(); }}>
                <h1>Plan je reis</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27.007" viewBox="0 0 27 27.007">
                    <path id="Icon_ionic-ios-search" data-name="Icon ionic-ios-search" d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z" transform="translate(-4.5 -4.493)" />
                </svg>
            </div>
        </div>
    )
}

export default Planner;