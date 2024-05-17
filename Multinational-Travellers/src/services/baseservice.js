import axios from "axios";
import { environment } from "../environments/environment";

class BaseService {
  async Fetch(url) {
    try {
      return await axios.get(environment.baseUrl + url);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Find(url) {
    try {
      return axios.get(environment.baseUrl + url);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Post(url, data) {
    try {
      return axios.post(environment.baseUrl + url, data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async Update() {}
}

export const baseService = new BaseService();
