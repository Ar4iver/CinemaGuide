/**
 * В данном файле лежит конфиг маршрутов приложения
 */

import { GenresPage } from 'pages/GenresPage'
import { MainPage } from 'pages/MainPage'
import { MoviesPageByGenre } from 'pages/MoviesPageByGenre'
import { ProfilePage } from 'pages/ProfilePage'
import SingleMoviePage from 'pages/SingleMoviePage/ui/SingleMoviePage'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	GENRES = 'genres',
	PROFILE = 'profile',
	SingleMovie = 'singleMovie',
	MoviesPageByGenre = 'moviesPageByGenre'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.GENRES]: '/genres',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.SingleMovie]: '/movie/:id',
	[AppRoutes.MoviesPageByGenre]: '/genres/:genre'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.GENRES]: {
		path: RoutePath.genres,
		element: <GenresPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
	},
	[AppRoutes.SingleMovie]: {
		path: RoutePath.singleMovie,
		element: <SingleMoviePage />
	},
	[AppRoutes.MoviesPageByGenre]: {
		path: RoutePath.moviesPageByGenre,
		element: <MoviesPageByGenre />
	}
}
