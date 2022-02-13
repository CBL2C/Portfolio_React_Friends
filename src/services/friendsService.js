import axios from "axios";

let getFriends = () => {
  const config = {
    method: "GET",
    url: "https://randomuser.me/api/?page=1&results=12"
  };
  return axios(config);
};

export { getFriends };
