/**
 * В данном файле лежит конфиг маршрутов приложения
 */

import { GenresPageAsync } from 'pages/GenresPage/GenresPage.async'
import { MainPageAsync } from 'pages/MainPage/MainPage.async'
import { RouteProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	GENRES = 'genres'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.GENRES]: '/genres'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPageAsync />,
	},
	[AppRoutes.GENRES]: {
		path: RoutePath.genres,
		element: <GenresPageAsync />,
	},
}
