
import React from 'react';
import styles from './App.module.css';
import {fetchData} from './api/index';
import coronaLogo from './images/coronaLogo.png';

import {Cards, Chart, CountryPicker} from './components';

class App extends React.Component {

    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {

        const fetchedData = await fetchData();
        this.setState({data: fetchedData})

    }
    
    handleCountryChange = async (country) => {

        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country})

        

    }

    render() {
        const {data, country} = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaLogo} alt="covid_19"/>

                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
                
            </div>
        )
    }
}
export default App;