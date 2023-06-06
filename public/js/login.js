import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (personnelNumber, password) => {
  try {
    // await axios({
    //   method: 'POST',
    //   url: '/users/login',
    //   data: {
    //     personnelNumber,
    //     password
    //   }
    // });

    const res = await axios({
      method: 'POST',
      url: '/users/login',
      data: {
        personnelNumber,
        password
      }
    });

    if (res.data.status === 'success') { 
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    console.log(`Error has been occured: \n` + err );
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if (res.data.status = 'success') {
      location.reload(true);
    }
  } catch(err) {
    showAlert('error', 'Error logging out! Try again.');
  }
};
