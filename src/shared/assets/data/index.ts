import { PostStatus } from './../../types/index';
import { Post, SelectItem } from "@Shared/types";
import { COLORS } from '@Shared/style';

export const posts: Post[] = [
  {
    id: '1660108207110',
    createdAt: 1660108207110,
    title: 'Mobile development',
    status: 'isDrafted',
    desc: 'Hey there, I’d like to talk about mobile development CI/CD processes and tooling. What are your thoughts on that?',
    image: 'https://www.fikrabd.com/sites/default/files/inventionland-flying-apps.jpg',
  },
  {
    id: '1660108225398',
    createdAt: 1660108225398,
    title: 'Why do you need lint?',
    status: 'isPublished',
    desc: 'Linting is an essential tool that allows developers to keep the coding readability high as well as fix some issues',
    image: 'https://nsoft.co.il/wp-content/uploads/2020/01/1_NXSzsdddddddddeeer.jpeg',
  },
];


export const statusListItems: SelectItem[] = [
  {
    id: '0',
    label: 'Draft',
    value: PostStatus.IsDrafted,
    color: COLORS.lightRed,
    textColor: COLORS.danger
  },
  {
    id: '1',
    label: 'Published',
    value: PostStatus.IsPublished,
    color: COLORS.lightGreen,
    textColor: COLORS.green
  },
];
