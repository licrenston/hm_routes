import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

const getToDos = () => {
    return axiosInstance.get('todos')
}

const getAlbums = () => {
    return axiosInstance.get('albums')
}

const getComments = () => {
    return axiosInstance.get('comments')
}

const getPostComments = (id) => {
    return axiosInstance.get("posts/" + id + "/comments");
}

export {
    getToDos,
    getAlbums,
    getComments,
    getPostComments
}