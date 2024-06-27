import ContentLoader from "react-content-loader";
import cls from './MovieList.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { MovieCardSkeleton } from "../MovieListItem/MovieCardSkeleton";

interface MovieSkeletonPropsList {
  className?: string
  howManySkeletonItem: number
}


/** todo: Оптимизация? */
export const MovieListSkeleton = ({ className, howManySkeletonItem }: MovieSkeletonPropsList) => {
  const skeletonItems = Array.from({ length: howManySkeletonItem }, (_, index) => (
    <MovieCardSkeleton isShowRating={true} key={index} />
  ));

  return (
    <div className={classNames(cls.MovieList, {}, [className])}>
      {skeletonItems}
    </div>
  );
};

export default MovieListSkeleton;


