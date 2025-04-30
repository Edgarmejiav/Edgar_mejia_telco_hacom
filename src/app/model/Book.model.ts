export class Book {
  id: number;
  title: string;
  description: string;
  year: number;
  authorId: number;
  isPublished: boolean;
  registrationDate: Date;
}

export class Author {
  id: number;
  name: string;
  gender: string;
}
