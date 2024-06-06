/**
 * В данном файле лежит конфиг маршрутов приложения
 */


import { GenresPage } from 'pages/GenresPage'
import { MainPage } from 'pages/MainPage'
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
		element: <MainPage />,
	},
	[AppRoutes.GENRES]: {
		path: RoutePath.genres,
		element: <GenresPage />,
	},
}
