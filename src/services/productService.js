import axios from "axios";

let product = (payload) => {

    const config = {
      method: "Post",
      url: "https://api.remotebootcamp.dev/api/entities/products",
      data: payload,
      withCredentials: true,
      crossdomain: true,
      headers: { "Content-Type": "application/json" }
    };
  
    return axios(config);
  };
  
  export {product}; 