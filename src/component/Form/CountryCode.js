import React, {useEffect,useState} from 'react';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';


//A custom inputs from the react-phone-number-input package for  select element
const CountrySelect = ({ value, onChange, labels, ...rest }) => (
    <select {...rest} value={value} onChange={(event) => onChange(event.target.value || undefined)}>
      <option value="">{labels.ZZ}</option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
              {/* {labels[country]} + */}
             +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>);

function CountryCode(props) {
    //Fetch Country Code

    useEffect(() => {   
        // eslint-disable-next-line react-hooks/exhaustive-deps
              navigator.geolocation.getCurrentPosition
            (handleNavigator,
                () => console.warn('permission was rejected'
            ));
    }, [])
    

    async function handleNavigator(pos) { 
        const { latitude, longitude } = pos.coords;
        const userCountryCode = await lookupCountry( latitude, longitude );
        setCountry(userCountryCode);
    }
    
    async function lookupCountry( lat, long) {
        const URL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyCTDc0WXlTqOQJoGuPSRyPMlfkjan-zhQ8`;
        const locationData = await fetch(URL).then((res) => res.json());
        const [{ address_components }] = locationData.results.filter(({ types }) => types.includes('country'));
        const [{ short_name}] = address_components;
        return short_name;
    }
    
    const [country, setCountry] = useState();


    return (
        <div>
            <CountrySelect country={country} 
                className={'country-code form__input '}
                        labels={en}
                        value={country}
                        name="countrySelect"
                        onChange={setCountry} /> 
                  
        </div>
    );
}

export default CountryCode;

