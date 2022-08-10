import {Post} from '@Shared/types';

export const editPostAction = (posts: Post[], post: Post) => {
  const editedPost = posts.map(item => {
    if (item.id === post.id) {
      return post
    }
    return item;
  });
  return editedPost;
};
