import ContentLoader from "react-content-loader";
import cls from './GenreListItem.module.scss'

interface GenresItemSkeletonProps {
  className?: string
}

export const GenresItemSkeleton = ({ className }: GenresItemSkeletonProps) => (
  <div className={cls.cardSkeletonWrapper}>
    <ContentLoader 
      speed={2}
      width={309}
      height={304}
      viewBox="0 0 309 304"
      backgroundColor={'#333'}
      foregroundColor={'#999'}
    >
      <rect x="0" y="0" rx="5" ry="5" width="309" height="304" /> 
    </ContentLoader>
  </div>
);