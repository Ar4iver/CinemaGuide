import React from "react"
import cls from './HeroSkeleton.module.scss'
import ContentLoader from "react-content-loader"

export const HeroSkeleton = (props: any) => (
  <div className={cls.skeleton}>
    <ContentLoader 
      speed={2}
      width={600}
      height={680}
      viewBox="0 0 600 400"
      backgroundColor={'#333'}
      foregroundColor={'#999'}
      {...props}
    >
      <rect x="20" y="20" rx="5" ry="5" width="60" height="20" /> 
      <rect x="100" y="20" rx="5" ry="5" width="100" height="20" /> 
      <rect x="220" y="20" rx="5" ry="5" width="100" height="20" /> 
      <rect x="340" y="20" rx="5" ry="5" width="100" height="20" /> 
      <rect x="460" y="20" rx="5" ry="5" width="100" height="20" /> 
      
      <rect x="20" y="80" rx="5" ry="5" width="750" height="56" /> 
      <rect x="20" y="170" rx="5" ry="5" width="460" height="56" /> 
      
      <rect x="20" y="250" rx="5" ry="5" width="140" height="40" /> 
      <rect x="180" y="250" rx="5" ry="5" width="140" height="40" /> 
      <circle cx="360" cy="270" r="20" /> 
      <circle cx="410" cy="270" r="20" />
    </ContentLoader>
  </div>
)

export default HeroSkeleton;