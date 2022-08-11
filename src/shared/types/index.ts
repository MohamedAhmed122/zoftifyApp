export type StatusType = 'isDrafted' | 'isPublished';

export enum PostStatus {
  IsDrafted = 'isDrafted',
  IsPublished = 'isPublished',
}

export interface Post {
  id: string;
  createdAt: number;
  title: string;
  status: StatusType;
  desc: string;
  image: string;
}

export interface CreatePost extends Omit<Post, 'createdAt'| 'id'>{}
export interface SelectItem {
  value: StatusType;
  label: string;
  id: string;
  color: string;
  textColor: string
}
