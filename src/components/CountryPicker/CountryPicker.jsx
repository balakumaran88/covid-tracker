import React, {useState, useEffect} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import {fetchCountries as Countries} from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
    const [ countryData, setFetchedCountries] = useState([]);
    useEffect(() => {

        const fetchCountries = async () => {
            setFetchedCountries(await Countries());
        }
        fetchCountries();
    }, [setFetchedCountries])

    return (
        <>
          <FormControl className={styles.formControl}>
              <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
                  <option value="">Global</option>
                    {countryData.map((c,i) => <option key={i}value={c}>{c}</option>)}
              </NativeSelect>
          </FormControl> 
        </>
    )
}

export default CountryPicker;
