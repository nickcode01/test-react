import { useEffect, useState } from "react";
import axios from 'axios';

const useGetCountries = (API) => {
	const [countries, setCountries] = useState([]);

	useEffect(async () => {
		const response = await axios(API);
		setCountries(response.data);
	}, []);

	return countries;
};

export default useGetCountries;