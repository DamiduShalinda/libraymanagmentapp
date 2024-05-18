import { Book } from "@/src/modal/book";
import { GETALLBOOKS, GETBOOK } from "../const"
import axios from "axios";

const getAllBooks = async () => {
    return (await axios.get<Book[]>(GETALLBOOKS)).data;
}

const getBookData = async (id: number) => {
    return (await axios.get<Book>(GETBOOK + id)).data;
}

export { getAllBooks , getBookData };