import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Searchbar.module.scss'
import SearchIcon from 'shared/assets/icons/search_icon.svg'
import Star from 'shared/assets/icons/star_rating.svg'
import { Input } from 'shared/ui/Input/Input'
import { useSelector } from 'react-redux'
import { getSearchState } from '../model/selectors/getSearchState/getSearchState'
import { useAppDispatch } from 'app/providers/StoreProvider/config/store'
import { searchActions } from '../model/slice/searchSlice'
import { useSearchMovies } from 'shared/hooks/useSearchMovies'
import { MovieSchema } from 'entities/Movie'
import { useDebounce } from 'shared/hooks/useDebounce'
import { formatMinutes } from 'shared/lib/helper/formatTime'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface SearchbarProps {
  className?: string
}

export const Searchbar = ({ className }: SearchbarProps) => {

  const dispatch = useAppDispatch()

    const { text } = useSelector(getSearchState)

    const debouncedText = useDebounce(text, 200);

    const { data: movies, isSuccess, isError } = useSearchMovies(debouncedText);

    const onChangeSearchInput = (value: string) => {
      dispatch(searchActions.setTextInput(value))
    }

    const cleanInputEvent = () => {
      dispatch(searchActions.setTextInput(''))
    }

  return (
    <div className={cls.Searchbar}>
      <Input placeholder='Поиск' icon={<SearchIcon />} className={cls.searchInput} onChange={onChangeSearchInput} cleanInputEvent={cleanInputEvent} value={text}  />
      {isSuccess && movies && (
        <div className={cls.searchResults}>
          {movies.map((movie: MovieSchema) => {

              const mods: Record<string, boolean> = {
                [cls.gold]: movie.tmdbRating >= 7.6 && movie.tmdbRating <= 10,
                [cls.green]: movie.tmdbRating >= 6.4 && movie.tmdbRating <= 7.5,
                [cls.grey]: movie.tmdbRating >= 4.3 && movie.tmdbRating <= 6.3,
                [cls.red]: movie.tmdbRating >= 0 && movie.tmdbRating <= 4.2,
              }

           return (
              <AppLink to={`/movie/${movie.id}`} onClick={cleanInputEvent} key={movie.id}>
                <div className={cls.resultItem} >
                  <img src={movie.posterUrl} alt={movie.title} className={cls.poster} />
                  <div className={cls.details}>
                    <div className={cls.header}>
                      <span className={classNames(cls.rating, mods, [className])}><span className={cls.starIcon}><Star /></span>{movie.tmdbRating.toFixed(1)}</span>
                      <span className={cls.year}>{movie.releaseYear}</span>
                      <span className={cls.genre}>{movie.genres.join(', ')}</span>
                      <span className={cls.duration}>{formatMinutes(movie.runtime)}</span>
                    </div>
                    <div className={cls.title}>{movie.title}</div>
                  </div>
                </div>
              </AppLink>
           )
           })}
        </div>
      )}
      {isError && <div>Ошибка при подгрузке фильмов</div>}
    </div>
  )
}