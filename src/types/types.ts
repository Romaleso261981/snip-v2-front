export interface ImageData {
  url: string;
}

export interface Author {
  id: number;
  name: string;
  email: string;
  avatar: ImageData;
}

export interface Category {
  documentId: string;
  name: string;
  description: string;
}

export interface AboutPageData {
  id: number;
  title: string;
  slug: string;
  description: string;
  content: string;
  createdAt: string;
}

export interface UserCardData {
  title: string;
  slug: string;
  description: string;
  content: string;
}

export interface UserCardResponse {
  data: UserCardData[];
}

export interface SingleUserCardResponse {
  data: UserCardData;
}
