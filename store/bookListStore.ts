import {create} from "zustand"


type BookStore = {
    books: string[]
    addBook: (book: string) => void
}


const useBookStore = create<BookStore>((set) => ({
    books: [],
    addBook: (book) => set((state) => ({books: [...state.books, book]}))
}))

export default useBookStore