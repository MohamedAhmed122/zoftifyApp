import {statusListItems} from '@Shared/assets/data';
import {Post, StatusEnum} from '@Shared/types';

export const getCurrentStatus = (post?: Post) => {
  const editStatus =
    post?.status === StatusEnum.IsDrafted
      ? statusListItems[0]
      : post?.status === StatusEnum.IsPublished
      ? statusListItems[0]
      : undefined;
  return editStatus;
};
