import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "15d761dd959840b09d6a2368db40efa0",
  },
});
