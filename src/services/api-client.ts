import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2f5ad1f60e6c4c0cb3e16aac7a0ca61c",
  },
});
