import React from "react";


export default class Forecastday extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { };
    }
    getForecastDate = () => {
       const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        const date = days[new Date().getDay()];
        const nextIndex = (days.indexOf(date) + 1) % days.length;
        return days[nextIndex];
    }

    render() {
        const { day, date } = this.props;
        if (!day) return null;
        return (
            <div className="forecastContainer">
                    <div className="item">
                        {/* <div>{this.props.getForecastDate()}</div> */}
                        <div>{console.log(date)}</div>
                        <div>{this.getForecastDate()}</div>
                        <div><img  className="image" src={day.condition.icon} /></div>
                        <div className="temp">{day.maxtemp_c}°</div>
                        <div className="cond-text">{day.condition.text}</div>
                    </div>
            </div>
        );
    }
}