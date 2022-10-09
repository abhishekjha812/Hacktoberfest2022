import axios from "axios"
const url = "http://localhost:8000"
export const createPost = async (post) => {
    try {
        await axios.post(`${url}/create`, post)
    }
    catch (err) {
        console.log(err)
    }

}
export const getAllPost = async (param) => {
    try {
        let response = await axios.get(`${url}/posts${param}`)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
}
export const getPost = async (id) => {
    try {
        let res = axios.get(`${url}/post/${id}`)
        return res;
    }
    catch (err) {
        console.log(err)
    }
}
export const updatePost = async (id, post) => {
    try {
        await axios.post(`${url}/update/${id}`, post)

    }
    catch (err) {
        console.log(err)
    }
}
export const deleteBlog = async (id) => {
    try {
        await axios.delete(`${url}/delete/${id}`)

    }
    catch (err) {
        console.log(err)
    }
}

export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);

    }
    catch (err) {
        console.log(err)
    }
}
// iske neeche commnets ka kamm kiya hai F
export const newComment = async (data) => {
    try {
        return await axios.post(`${url}/comment/new`, data)
    }
    catch (err) {
        console.log(err)
    }
}
export const getComments = async (id) => {
    try {
        let res = await axios.get(`${url}/comments/${id}`)
        return res.data
    }
    catch (err) {
        console.log(err)
    }
}
export const deleteComment = async (id) => {
    try {
        await axios.delete(`${url}/comment/delete/${id}`)

    }
    catch (err) {
        console.log(err)
    }
}