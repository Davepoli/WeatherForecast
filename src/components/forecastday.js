import React from "react";
import moment from 'moment';


export default class Forecastday extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { };
    }
    getForecastDate = () => {
        const forecastDate = moment(this.props.date).format('dddd');
        const today = moment().format('dddd');
        if(forecastDate === today) { return 'Today'}
        else{return forecastDate}
    }
    
    // getForecastDate = () => {
    //     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    //      const date = days[new Date().getDay()];
    //      const nextIndex = (days.indexOf(date) + 1) % days.length;
    //      return days[nextIndex];
         
    //  }
    
    render() {
        const { day } = this.props;
        if (!day) return null;
        return (
            <div className="forecastContainer">
                    <div className="item">
                        <div>{this.getForecastDate()}</div>
                        <div><img  className="image" src={day.condition.icon} /></div>
                        <div className="temp">{day.maxtemp_c}°</div>
                        <div className="cond-text">{day.condition.text}</div>
                    </div>
            </div>
        );
    }
}