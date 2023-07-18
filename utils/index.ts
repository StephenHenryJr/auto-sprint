import { CarProps, FilterProps } from "@types";


// Generated function to calculate rent of car
export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

// Fetch our cars from our API
export async function fetchCars() {
  // Set the required headers for the API request
  const headers: HeadersInit = {
    "X-RapidAPI-Key": "dc0c32a409msh847f1dac53b04a2p14928cjsn1c430baa58a3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=accord',
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();
  return result;
}


// Generate images of cars for our CarDetails component
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;

  url.searchParams.append('customer', 'copyright-imaginstudio');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

// https://cdn.imagin.studio/getimage?customer=hrjavascript-mastery&make=porsche&modelFamily=911&zoomType=fullscreen&modelYear=1994&angle=undefined

// https://cdn.imagin.studio/getImage?customer=copyright-imaginstudio&make=acura&modelFamily=tlx&angle=23&width=2600&zoomType=fullscreen

