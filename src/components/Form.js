import React from 'react'

const Form = props => (
	<form className="form" onSubmit={props.getWeather}>
		<input className="input" type="text" name="cityName" placeholder="City..."/>
		<button className="button" >Select</button>
	</form>
)

export default Form