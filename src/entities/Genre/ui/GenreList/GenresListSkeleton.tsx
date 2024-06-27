import { classNames } from "shared/lib/classNames/classNames";
import cls from './GenreList.module.scss'
import { GenresItemSkeleton } from "../GenreListItem/GenresItemSkeleton";

interface GenresListSkeleton {
  className?: string
  howManySkeletonItem: number
}

export const GenresListSkeleton = ({ className, howManySkeletonItem }: GenresListSkeleton) => {
  const skeletonItems = Array.from({ length: howManySkeletonItem }, (_, index) => (
    <GenresItemSkeleton key={index} />
  ));

  return (
    <div className={classNames(cls.GenreList, {}, [className])}>
      {skeletonItems}
    </div>
  );
};

export default GenresListSkeleton;