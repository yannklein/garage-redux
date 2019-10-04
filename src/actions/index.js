
// TODO: add and export your own actions
export const GET_CARS = 'GET_CARS';
export const GET_CAR = 'GET_CAR';
export const POST_CAR = 'POST_CAR';

export function getCars(garage) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: GET_CARS,
    payload: promise
  };
}

export function getCar(carId) {
  const url = `https://wagon-garage-api.herokuapp.com/cars/${carId}`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: GET_CAR,
    payload: promise
  };
}

export function createCar(garage, body, callback) {
  const url = `https://wagon-garage-api.herokuapp.com/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(callback);
  return {
    type: POST_CAR, // Not used by reducer (we navigate)
    payload: request
  };
}
