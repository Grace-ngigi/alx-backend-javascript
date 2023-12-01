// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

// Write and export a function named handleProfileSignup.
// It should accept three arguments firstName (string), lastName (string), and fileName (string).
// The function should call the two other functions.
// When the promises are all settled it should return an array with the following structure:

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      console.log(`data${data}`);
      return data.map((result) => ({
        // console.log("result" + result)
        status: Promise.status,
        value: result,
      }));
    })
    .catch((error) => [{
      status: Promise.status,
      value: error,
    }]);
}

// [
//     {
//       status: status_of_the_promise,
//       value: value or error returned by the Promise
//     },
//     ...
//   ]
