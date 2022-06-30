import axios from "axios";
import { apiUrl, apiUserUrl } from "../constants/apiUrl";
// const [apiData, setApiData] = useState([]);

//get data
export const getData = async () => {
  const res = await axios.get(apiUrl);

  if (res) {
    const productData = await res.data;
    return productData;
  }
};

//get user

// export const getUserData = async ({ state: { user } }) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${user.token}`,
//     },
//   };
//   const res = await axios.get(apiUserUrl + "me", config);
// };

//register user

export const registerUser = async ({ name, email, password }) => {
  const res = await axios.post(apiUserUrl, { name, email, password });

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
};

//login user
export const loginUser = async ({ email, password }) => {
  const res = await axios.post(apiUserUrl + "login", { email, password });

  if (res.data) {
    localStorage.setItem("user", JSON.stringify(res.data));
  }
};

//logout user

export const logoutUser = async () => {
  localStorage.removeItem("user");
};

//get user
export const getUser = async () => {
  const res = await axios.get(apiUserUrl + "me");
  if (res) {
    console.log(res.data);
  }
};