import axios from "axios";

export default axios.create({
  baseURL: "http://genesisrack.herokuapp.com/api/nasa",
  // baseURL: "http://localhost:5000/api/nasa",
});
