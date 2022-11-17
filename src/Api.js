import axios from 'axios';
import { serialize } from 'object-to-formdata';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

class Api {
  static createHotel(post) {
    console.log(post);
    return api.post('hotel/create', serialize(post, { indices: true }));
  }
}

export default Api;
