export type Book = {
    id: number;
    bookName: string;
    isbn: string;
    authorName: string;
    status: "Available" | "Not Available" | "Read";
    coverImageUrl: string;
  };