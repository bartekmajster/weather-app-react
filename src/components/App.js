import React, {Component} from 'react';
import Search from "./Search";
import Result from "./Result";
import './App.css';
import {ReactComponent as Thunder} from '../icons/thunder.svg';

/*please don't :)*/
const API_KEY='498043a8c29874c71641aaa0bab73e11';

class App extends Component {
	state = {
		city:'',
		cityName: '',
		date: '',
		sunrise: '',
		sunset: '',
		temp: '',
		wind: '',
		description: '',
		err: false,
		logo:true,
		icon: '',
		spin: false,
	};

	handleDataFetch = async (API) => {
		const response = await fetch(API);

		if (!response.ok) {
			this.setState({
				err: true
			})
		}else {
			const data = await response.json();
			this.setState(state =>({
				city: data.name,
				date: data.dt,
				sunrise: data.sys.sunrise,
				sunset: data.sys.sunset,
				temp: data.main.temp,
				wind: data.wind.speed,
				description: data.weather[0].description,
				err: false,
				icon: data.weather[0].icon,
			}))
		}
	};


	handleInputChange = e => {
		this.setState({
			cityName: e.target.value
		})
	};

	handeSubmit = e => {
		e.preventDefault();
		if(this.state.cityName===''){
			return;
		}
		console.log(process.env);
		const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityName}&units=metric&APPID=${API_KEY}`;
		setTimeout(()=>this.handleDataFetch(API),1100);
		this.setState(prevState => ({
			logo: false,
			spin: !this.state.spin
		}));
	};

	render() {
		return (
			<div className="card">
				<Search change={this.handleInputChange} value={this.state.cityName} submit={this.handeSubmit}/>
				{console.log(this.state.logo)}
				{this.state.logo===true ? <h1>weather app</h1> : null}
				<div className={this.state.spin ? 'icon leftSpin' : 'icon rightSpin'}>
					<Thunder/>
				</div>
				<Result weather={this.state}/>
			</div>
		)
	}
}

export default App;
