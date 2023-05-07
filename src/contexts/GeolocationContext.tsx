import { createContext, useState, useEffect, type ReactNode } from 'react'
import axios from 'axios';
import { useMemo } from 'react'; 

interface GeolocationContextType {
	latitude: number,
	longitude: number,
	locality: string,
	principalSubdivisionCode: string,
}

interface GeolocationContextProviderProps {
  children: ReactNode;
}

export const GeolocationContext = createContext({} as GeolocationContextType);

export function GeolocationContextProvider({ children }: GeolocationContextProviderProps) {
	const [latitude, setLatitude] = useState<number|null>();
	const [longitude, setLongitude] = useState<number|null>();
	const reverseGeolocationData = useMemo(async () => { 
	const { data } =  await axios( 
	`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
`)
		setLocality(data.locality);
		setPrincipalSubdivisionCode(data.principalSubdivisionCode.split('-')[1]);
	}, [latitude, longitude])
	const [locality, setLocality] = useState('');
	const [principalSubdivisionCode, setPrincipalSubdivisionCode] = useState('');

	useEffect(() => {

		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		})

	}, [latitude, longitude])
 
  return (
    <GeolocationContext.Provider
      value={{
				latitude,
				longitude,
				locality,
				principalSubdivisionCode,
      }}
    >
      {children}
    </GeolocationContext.Provider>
  );
}

