import { faker } from "@faker-js/faker";
import { storeWeatherData, storeFlowerData } from "../helpers/helper.js";

//Weather Service
export const generateLondonWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData = {
    city:"London",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };
storeWeatherData(generatedWeatherData).catch(console.error);
  // Return weather data
  return generatedWeatherData;
};

export const generateDubaiWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    city:"Dubai",
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  storeWeatherData(generatedWeatherData).catch(console.error);

  // Return weather data
  return generatedWeatherData;
};




//Flower Service

//Rose flower
export const generateRoseFlowerData = (): FlowerData => {
  // Generate random flower data
  const generatedFlowerData: FlowerData =  {
    name: "Rose",
    temperature: faker.number.int({ min: 15, max: 25 }),
    waterNeeds: faker.number.int({ min: 2, max: 5 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 4 }),
    sunHour: faker.number.int({ min: 4, max: 6 }),
  };

storeFlowerData(generatedFlowerData).catch(console.error);

  // Return flower data
  return generatedFlowerData;
};


//Lily Flower
export const generateLilyFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Lily",
    temperature: faker.number.int({ min: 16, max: 24 }),
    waterNeeds: faker.number.int({ min: 3, max: 6 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 5 }),
    sunHour: faker.number.int({ min: 4, max: 6 }),
  };
storeFlowerData(generatedFlowerData).catch(console.error);

  return generatedFlowerData;
};


//Tulip Flower
export const generateTulipFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Tulip",
    temperature: faker.number.int({ min: 10, max: 18 }),
    waterNeeds: faker.number.int({ min: 2, max: 5 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 4 }),
    sunHour: faker.number.int({ min: 3, max: 5 })
  };
  storeFlowerData(generatedFlowerData).catch(console.error);

  return generatedFlowerData;
};



//Orchid Flower
export const generateOrchidFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Orchid",
    temperature: faker.number.int({ min: 15, max: 29 }),
    waterNeeds: faker.number.int({ min: 2, max: 4 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 4 }),
    sunHour: faker.number.int({ min: 2, max: 4 }),
  };
  storeFlowerData(generatedFlowerData).catch(console.error);

  return generatedFlowerData;
};



//Hydrangea Flower
export const generateHydrangeaFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Hydrangea",
    temperature: faker.number.int({ min: 14, max: 20 }),
    waterNeeds: faker.number.int({ min: 4, max: 8 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 5 }),
    sunHour: faker.number.int({ min: 2, max: 5 }),
  };
  storeFlowerData(generatedFlowerData).catch(console.error);

  return generatedFlowerData;
};