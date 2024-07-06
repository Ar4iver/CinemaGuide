import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Hero.module.scss'
import { MovieSchema } from 'entities/Movie'
import { formatMinutes } from 'shared/lib/helper/formatTime'
import Star from 'shared/assets/icons/star_rating.svg'
import { truncateText } from 'shared/lib/helper/truncateText'
import { VideoPlayerModal } from 'features/video-player'
import { HeroActions } from './HeroActions/HeroActions'

interface HeroProps {
  className?: string
  movie: MovieSchema
  refetch?: () => void
}

export const Hero = memo(({ className, movie, refetch }: HeroProps) => {

  const [isViewVideo, setIsViewVideo] = useState(false)

  const onCLoseModal = useCallback(() => {
    setIsViewVideo(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsViewVideo(true)
  }, [])

  const mods = useMemo(() => ({
    [cls.gold]: movie.tmdbRating >= 7.6 && movie.tmdbRating <= 10,
    [cls.green]: movie.tmdbRating >= 6.4 && movie.tmdbRating <= 7.5,
    [cls.grey]: movie.tmdbRating >= 4.3 && movie.tmdbRating <= 6.3,
    [cls.red]: movie.tmdbRating >= 0 && movie.tmdbRating <= 4.2,
  }), [movie.tmdbRating]);

  console.log(6.374.toFixed(1))

    return (
      <div className={classNames(cls.Hero, {}, [className])}>
          <div className={classNames(cls.infoMovieBanner, { [cls.slideDown]: true }, [])}>
              <div className={cls.headerInfo}>
                <span className={classNames(cls.rating, mods, [className])}><span className={cls.starIcon}><Star /></span> {Number(movie.tmdbRating.toFixed(1))}</span>
                <span className={cls.year}>{movie.releaseYear}</span>
                <span className={cls.genre}>{movie.genres.join(', ')}</span>
                <span className={cls.duration}>{formatMinutes(movie.runtime)}</span>
              </div>
              <div className={cls.middleInfo}>
                <span className={cls.title}>{movie.title}</span>
                <span className={cls.plot}>{truncateText(movie.plot, 240)}</span>
              </div>
              <HeroActions movie={movie} onShowModal={onShowModal} refetch={refetch}  />
          </div>
          {movie.backdropUrl && movie.posterUrl && (
        <div 
          className={classNames(cls.fadeInImage)}
          style={{
            backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.5)),
            linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)),
            linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5)),
            url(${movie.backdropUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'right',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            top: '0',
            right: '0',
            width: '900px',
            height: '600px',
          }}
        ></div>
      )}
          <VideoPlayerModal trailerUrl={movie.trailerUrl} trailerId={movie.trailerYouTubeId} isOpen={isViewVideo} onClose={onCLoseModal} />
      </div>
    )
})