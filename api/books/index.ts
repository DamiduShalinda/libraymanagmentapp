import { Book } from "@/modal/book";
import { GETALLBOOKS } from "../const"
import axios from "axios";

const getAllBooks = async () => {
    return (await axios.get<Book[]>(GETALLBOOKS)).data;
}

export { getAllBooks };