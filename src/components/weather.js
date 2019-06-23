import React from 'react';

const Weather = props => (
	<div>
	<div>
	{
	props.bus1 && <p className="weather__key">{ props.bus1}</p>
	}
	</div>
	<div class="weather__info">

	 {
	 	props.city && props.country && <p className="weather__key "> Град:
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p>
	 }
	 {
	 	props.temp && <p className="weather__key "> Температура:
	 		<span className="weather__value"> { props.temp}	</span>
	 	</p>
	 }
	 {
	 	props.wmax && <p className="weather__key "> Максимална:
	 		<span className="weather__value"> { props.wmax}	</span>
	 	</p>
	 }
	 {
	 	props.wmin && <p className="weather__key "> Минимална:
	 		<span className="weather__value"> { props.wmin } </span>
	 	</p>
	 }

	 {
	 	props.cond && <p className="weather__key"> Условия:
	 		<span className="weather__value"> { props.cond } </span>
	 </p>
	 }

	 {
	 	props.error && <p className="weather__error">{ props.error }</p>
	 }

	 </div>
	 <div>
	 	{
		props.iframe && <p className="weather__key">{ props.iframe}</p>
		}
	</div>
</div>
);

export default Weather;
