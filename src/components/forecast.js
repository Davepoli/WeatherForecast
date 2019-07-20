import React from "react";

import Forecastday from "./forecastday";

export default class Forecast extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }
    getForecastDate = (forecastday) => {
         const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
         const date = days[new Date().getDay()];
         console.log(date)
         const nextIndex = (days.indexOf(date) + 1) % days.length;
         const d = days[nextIndex];
         console.log(d)
         const c = (days.indexOf(d) + 1) % days.length;
         const b = days[c]
         console.log(b)
           const a = forecastday.map(() => {
                return ((days.indexOf(d) + 1) % days.length)
            })
            return (a)
     }
    // Skusit priradit jednotlive const k jednotlivym dnom. alebo vytvorit novu componentu a 
    // nad kazdy den priradit napevno alebo pre kazdy index forecastday arrayu priradit jednu const..
    // alebo  z ktorych vytvorim object a props poslem

    render() {
        const { forecastday } = this.props;
        return (
            <div className="bottomForCont">
                <div className="innerContainer">{ forecastday &&
                    forecastday.map((day, idx) => {
                            console.log(day)
                            return <Forecastday  day={day.day}  key={idx}   getForecastDate={console.log(this.getForecastDate(forecastday))} />;
                        })}
                </div>
            </div>
        );
    }
}
