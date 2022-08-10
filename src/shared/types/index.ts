export type StatusType  = 'isDrafted' | 'isPublished'

export enum StatusEnum {
    IsDrafted = 'isDrafted',
    IsPublished = 'isPublished'
}


export interface Post{
    id: string;
    createdAt: number
    title:  string;
    status: StatusType,
    desc: string;
    image: string;
}


