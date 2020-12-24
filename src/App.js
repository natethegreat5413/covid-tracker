import React from 'react';
////COMPONENTS////
import { Cards, Chart, CountryPicker } from './components';

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

	// handleCountryChange = async (country) => {
	//   const data = await fetchData(country);

	//   this.setState({ data });
	// }

	render() {
		const { data } = this.state;

		return (
			<div className={styles.container}>
				<Cards data={data} />
				<CountryPicker />
				<Chart />
			</div>
		);
	}
}

export default App;
