import axios from "axios";
import { Url } from "../Urls";

export const handleSubmit = async (data) => {
  try {
    const response = await axios.post(`${Url}/search`, data);
    return response.data;
  } catch (error) {
    console.error("Error in handleSubmit:", error);
    throw error; // Re-throw error to handle it in calling function
  }
};
