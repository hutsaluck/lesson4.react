import axios, {AxiosResponse} from 'axios';
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {baseUrl, urls} from '../constants/urls'

let axiosInstance = axios.create({
    baseURL: baseUrl,
});

const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const axiosResponse: AxiosResponse<IUser[]> = await axiosInstance.get<IUser[]>(urls.usersUrls.all)
        return axiosResponse.data
    },
    getUserById: async (id: number): Promise<IUser> => {
        const axiosResponse: AxiosResponse<IUser> = await axiosInstance.get<IUser>(urls.usersUrls.oneById(id))
        return axiosResponse.data
    },
    getPostsOfUserById: async (id: number): Promise<IPost[]> => {
        const axiosResponse: AxiosResponse<IPost[]> = await axiosInstance.get<IPost[]>(urls.usersUrls.withPosts(id))
        return axiosResponse.data
    },
}

export {userService}