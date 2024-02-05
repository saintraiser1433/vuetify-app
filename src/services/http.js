import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8383/profiling-api/Resident",
  headers: {
    "Content-type": "application/json",
  },
});

class HttpServices {
  fetchData(url) {
    return http.get(url);
  }

  addData(url, post) {
    return http.post(url, post);
  }

  updateData(url, post) {
    return http.post(`${url}`, post);
  }

  deleteData(url, id) {
    return http.delete(`${url}`, {
      params: {
        id: id,
      },
    });
  }

  getDataById(id) {
    return http.get(`/data/${id}`);
  }
}

export default new HttpServices();
