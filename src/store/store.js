//library bawaan dari unistore
import createStore from "unistore";
import axios from "axios";

//konfigurasi (tempat menaruh kredensial)
import { Host, GorestHost, GorestToken } from "./Config";

//kumpulan data manajemen yg ada distore. semua data harus masuk di initialstate.
const initialState = {
  // Data: https://reqres.in
  is_login: false,
  bearer: "",

  // Data: https://gorest.co.in/public/v2/
  gorest_token: GorestToken,
  gorest_users: [],
  gorest_user: {},
  gorest_register: {
    "email":"",
    "name":"",
    "gender":"",
    "status":"active",
},
};

//fungsi API (mengambil data dari backend)
export const store = createStore(initialState);
export const actions = store => ({
  // URL: https://reqres.in
  postLogout: state => {
    store.setState({ is_login: false });
  },

  Login: async (state, username, password) => {
    const request = {
      method: "POST",
      url: Host + "/api/login",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
        store.setState({ bearer: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  GetListUser: async state => {
    const request = {
      method: "GET",
      url: Host + "/api/unknown",
      headers: {
        Authorization: "Bearer " + store.getState().bearer
      }
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
        return response.data
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  // END OF URL: https://reqres.in

  // URL: https://gorest.co.in/public/v2/
  GorestRegister: async (state) => {
    const request = {
      method: "POST",
      url: GorestHost + "/users",
      headers: {
        Authorization: "Bearer " + GorestToken
      },
      data: store.getState().gorest_register
    };
    await axios(request)
      .then(function(response) {
        console.log(response.data);
        store.setState({ gorest_user: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  // END OF URL: https://gorest.co.in/public/v2/
});
