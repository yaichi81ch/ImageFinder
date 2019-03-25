import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 476993992fe9446bdf8bf9ce2c75d5fbb77c903860c4234fe27ccb934499da19"
  }
});
