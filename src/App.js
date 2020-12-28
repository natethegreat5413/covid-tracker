import React from 'react';
////COMPONENTS////
import { Cards, Chart, CountryPicker } from './components';
import coronaImage from './images/image.png';

////STYLES////
import styles from './App.module.css';

////FUNCTIONS////
import { fetchData } from './api';

class App extends React.Component {
	state = {
		data: {},
		country: ''
	};

	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data });
	}

	handleCountryChange = async (country) => {
		// fetch the data
		// set the state
		const data = await fetchData(country);

		this.setState({ data, country: country });
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={coronaImage} alt="COVID-19"></img>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
