import axios from 'axios'


const http = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-type": "application/json"
    }
})

class HttpServices {

    fetchData(url) {
        return http.get(url);
    }

    addData(url,post) {
        return http.post(url, post);
    }

    updateData(id, post) {
        return http.put(`/data/${id}`, post);
    }

    deleteData(id) {
        return http.delete(`/data/${id}`);
    }

    getDataById(id) {
        return http.get(`/data/${id}`);
    }

}

export default new HttpServices()
