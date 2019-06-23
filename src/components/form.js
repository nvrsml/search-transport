import React from 'react';

const Form = props => (
	<form onSubmit={props.getWeather}>
      <input type="text" name="from" placeholder="Откъде"/>
      <input type="text" name="to" placeholder="Къде"/>
      <button>Търси</button>
      </form>
);

export default Form;
