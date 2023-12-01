import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      const { body, firstName, lastName } = user;
      console.log(firstName, lastName);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
