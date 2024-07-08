import axios, {AxiosResponse} from 'axios';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

const getAllUsers = async (): Promise<IUser[]> => {
    return await axiosInstance.get('/users').then((response: AxiosResponse<IUser[]>) => response.data);
}

const getUserById = async (id:number): Promise<IUser> => {
    return await axiosInstance.get(`/users/${id}`).then((response: AxiosResponse<IUser>) => response.data);
}
const getPostsOfUserById = async (id: number): Promise<IPost[]> => {
    return await axiosInstance.get('/users/' + id + '/posts').then((response: AxiosResponse<IPost[]>) => response.data)
};

export {getAllUsers, getPostsOfUserById, getUserById}