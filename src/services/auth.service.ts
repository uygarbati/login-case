import axios from "axios";
import { LoginForm } from "../types/login.type";
import { RegisterForm } from "../types/register.type";

const API_URL = new URL(process.env.REACT_APP_API || "");

export default {
    login: ({ email, password }: LoginForm) => {
        API_URL.searchParams.append('email', email);
        API_URL.searchParams.append('password', password);
        return axios
            .get(API_URL.href)
            .then(response => {
                API_URL.searchParams.delete('email')
                API_URL.searchParams.delete('password')
                return response.data;
            });
    },

    register: ({ name, email, password }: RegisterForm) => {
        return axios.post(API_URL.href, {
            name,
            email,
            password
        });
    }
}