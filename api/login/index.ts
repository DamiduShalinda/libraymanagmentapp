import { LoginFormData } from "@/src/modal/login";
import axios from "axios";
import { LOGIN } from "../const";

const login = async (data : LoginFormData) => {
    const response = await axios.post(LOGIN, data);
    return response.data;
}

export { login };