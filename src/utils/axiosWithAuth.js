import axios from 'axios';

export default () => {
  let token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

  return axios.create({headers: {Authorization: `Bearer ${token}`}});
}
