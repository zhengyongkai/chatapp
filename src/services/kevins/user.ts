import http from "@/utils/http";

const getUserParams = () => {
  return http.get("/");
};

export default {
  getUserParams
}