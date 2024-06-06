import React from 'react'
import { AppRouter } from './providers/router'
import { Modal } from 'shared/ui/Modal/Modal'

const App = () => {

	return (
		<div className={`app default`}>
			<Modal />
			<AppRouter />
		</div>
	)
}

export default App
