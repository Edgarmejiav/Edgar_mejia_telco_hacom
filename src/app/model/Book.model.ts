export class Book {
  id: string;
  title: string;
  description: string;
  year: number;
  author: Author;
  authorId: number;
  published: boolean;
  registrationDate: Date;
}

export class Author {
  id: number;
  name: string;
  gender: string;
}
