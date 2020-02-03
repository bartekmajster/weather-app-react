import React from 'react';
import {ReactComponent as I01d} from '../icons/01d.svg';
import {ReactComponent as I02d} from '../icons/02d.svg';
import {ReactComponent as I03d} from '../icons/03d.svg';
import {ReactComponent as I04d} from '../icons/04d.svg';
import {ReactComponent as I09d} from '../icons/09d.svg';
import {ReactComponent as I10d} from '../icons/10d.svg';
import {ReactComponent as I11d} from '../icons/11d.svg';
import {ReactComponent as I13d} from '../icons/13d.svg';
import {ReactComponent as I50d} from '../icons/50d.svg';
import {ReactComponent as I01n} from '../icons/01n.svg';
import {ReactComponent as I02n} from '../icons/02n.svg';
import {ReactComponent as I03n} from '../icons/03n.svg';
import {ReactComponent as I04n} from '../icons/04n.svg';
import {ReactComponent as I09n} from '../icons/09n.svg';
import {ReactComponent as I10n} from '../icons/10n.svg';
import {ReactComponent as I11n} from '../icons/11n.svg';
import {ReactComponent as I13n} from '../icons/13n.svg';
import {ReactComponent as I50n} from '../icons/50n.svg';

const timeConverter = time => {
	return new Date(time * 1000).toLocaleTimeString()
};

const Icon = props => {
	const icon = `i${props.icon}`;
	switch (icon) {
		case 'i01d':
			return (<I01d/>);
		case 'i02d':
			return (<I02d/>);
		case 'i03d':
			return (<I03d/>);
		case 'i04d':
			return (<I04d/>);
		case 'i09d':
			return (<I09d/>);
		case 'i10d':
			return (<I10d/>);
		case 'i11d':
			return (<I11d/>);
		case 'i13d':
			return (<I13d/>);
		case 'i50d':
			return (<I50d/>);
		case 'i01n':
			return (<I01n/>);
		case 'i02n':
			return (<I02n/>);
		case 'i03n':
			return (<I03n/>);
		case 'i04n':
			return (<I04n/>);
		case 'i09n':
			return (<I09n/>);
		case 'i10n':
			return (<I10n/>);
		case 'i11n':
			return (<I11n/>);
		case 'i13n':
			return (<I13n/>);
		case 'i50n':
			return (<I50n/>);
	}
};

const Result = props => {
	const {city, temp, wind, description, err, icon, spin} = props.weather;
	let animation;
	if(spin===true){
		animation='icon rightSpin';
	}else{
		animation='icon leftSpin';
	}
	let content = null;
	if (!err && city) {
		content = (
			<>
				<p>{temp} &#176;C</p>
				<p>{wind} m/s</p>
				<p>{description}</p>
				<div className={animation}>
					<Icon icon={icon}/>
				</div>
			</>
		);
	}

	return (
		<div className="result">
			{err ? <h2>We could not find any results</h2> : content}
		</div>
	)
}

export default Result;