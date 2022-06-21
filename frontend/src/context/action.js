import axios from "axios";
import { apiUrl } from "../constants/apiUrl";
// const [apiData, setApiData] = useState([]);

export const getData = async () => {
  const res = await axios.get(apiUrl);

  if (res) {
    const productData = await res.data;
    console.log("28", productData);
    const productWithId = productData.map((item) => {
      return {
        ...productData,
        id: item._id,
      };
    });
    return productWithId;
  }
};
