import axios from "axios";

export default {
    getLists: function() {
        return axios.get("/api/lists")
    },
    getList: function(id) {
        return axios.get("/api/lists/" + id)
    },
    deleteList: function(id) {
        return axios.delete("/api/lists/" + id)
    },
    saveList: function(listData) {
        return axios.post("/api/lists/", listData)
    },
    updateList: function(id, listData) {
        return axios.put("/api/lists/" + id, listData)
    }
}