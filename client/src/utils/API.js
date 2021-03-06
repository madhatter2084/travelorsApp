// This code is meant to serve as a mock fetch from an API.
import axios from "axios";

export default {
  // Gets all countries
  postlogin: function(userObject) {
    return axios.post("/api/LoginInfo", userObject);
  },
  postSignup: function(userObject) {
    return axios.post("/api/Signup", userObject);
  },
  getSelection: function() {
    return axios.get("/api/Selection");
  },
  getProtocols:function(){
    return axios.get("/api/Protocols")
  },
  getCountry: function() {
    return axios.get("/api/Country");
  },
  getConvertor: function() {
    return axios.get("/api/Convertor");
  },
};