import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_API_URL,
});

class Api {
  static createHotel(data) {
    return api.post('/hotel/create', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static getHotelsList() {
    return api.get('/hotel/list');
  }

  static getSingleHotel(id) {
    return api.get(`/hotel/single/${id}`);
  }

  static deleteHotel(id) {
    return api.get(`/hotel/delete/${id}`);
  }

  static createRoom(data) {
    return api.post('/room/create', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }

  static getRoomsList(id) {
    return api.get(`/room/list/${id}`);
  }

  static getSingleRoom(id) {
    return api.get(`/room/single/${id}`);
  }

  static deleteRoom(id) {
    return api.get(`/room/delete/${id}`);
  }
}

export default Api;
