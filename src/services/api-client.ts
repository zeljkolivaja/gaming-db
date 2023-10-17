import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c8c480fadeb2441eb2e4f2b34c4ebf64",
  },
});
