import React from 'react'
import Forecastday from './forecastday'
export default class Forecast extends React.Component {
    
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		const { forecastday } = this.props
		return (
			<div className="bottomForCont">
				<div className="innerContainer">{ forecastday &&
                    forecastday.map((day, idx) => {
                    	console.log(day)
                    	return <Forecastday key={idx} day={day.day} date={day.date} />
                    })}
				</div>
			</div>
		)
	}
}
