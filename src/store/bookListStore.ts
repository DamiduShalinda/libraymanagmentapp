import { create } from "zustand";

export type BookCartItem = {
  id: number;
  bookName: string;
  imageUrl: string;
};

type BookStore = {
  books: BookCartItem[];
  addBook: (book: BookCartItem) => void;
  removeBook: (bookId: number) => void;
  clearBooks: () => void;
};

const useBookStore = create<BookStore>((set) => ({
  books: [
    {
      bookName: "string",
      id: 1,
      imageUrl:
        "http://10.0.2.2:5212/api/image/d0840d75-a196-493f-87e8-03b93b9e2639.webp",
    },
    {
      bookName: "string",
      id: 2,
      imageUrl:
        "http://10.0.2.2:5212/api/image/84ddd90e-85e0-4778-b3a9-300f2ab09ee8.jpg",
    },
  ],
  addBook: (book) =>
    set((state) => {
      const isBookExist = state.books.some(
        (existingBook) => existingBook.id === book.id
      );
      if (!isBookExist) {
        return {
          books: [...state.books, book],
        };
      }
      return state;
    }),
  removeBook: (bookId) =>
    set((state) => ({
      books: state.books.filter((book) => book.id !== bookId),
    })),
  clearBooks: () => set({ books: [] }),
}));

export default useBookStore;
