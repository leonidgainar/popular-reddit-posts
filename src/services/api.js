import axios from "axios";

export default axios.create({
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});
