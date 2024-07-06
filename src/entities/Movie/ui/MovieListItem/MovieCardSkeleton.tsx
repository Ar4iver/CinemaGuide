import ContentLoader from "react-content-loader";
import cls from './MovieCard.module.scss'

interface MovieSkeletonPropsItem {
  className?: string
  isShowRating: boolean
}

export const MovieCardSkeleton = ({ isShowRating }: MovieSkeletonPropsItem) => (
  <div className={cls.cardSkeletonWrapper}>
    <ContentLoader 
      speed={2}
      width={200}
      height={300}
      viewBox="0 0 200 300"
      backgroundColor={'#333'}
      foregroundColor={'#999'}
    >
      <rect x="0" y="0" rx="5" ry="5" width="200" height="250" /> 
    </ContentLoader>
    { isShowRating && <div className={cls.circle}></div> } 
  </div>
);