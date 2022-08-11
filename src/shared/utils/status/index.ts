import {statusListItems} from '@Shared/assets/data';
import {Post, PostStatus} from '@Shared/types';

export const getCurrentStatus = (post?: Post) => {
  const editStatus =
    post?.status === PostStatus.IsDrafted
      ? statusListItems[0]
      : post?.status === PostStatus.IsPublished
      ? statusListItems[0]
      : undefined;
  return editStatus;
};
