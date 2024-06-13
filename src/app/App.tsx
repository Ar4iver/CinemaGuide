import React, { useEffect } from 'react'
import { AppRouter } from './providers/router'
import { useAppDispatch } from './providers/StoreProvider/config/store'
import { fetchProfile } from 'features/profile/model/services/fetchProfile/fetchProfile'

const App = () => {

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchProfile())
	}, [dispatch])

	return (
		<div className={`app default`}>
			<AppRouter />
		</div>
	)
}

export default App
