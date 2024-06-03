import React, { useContext, useState } from 'react'
import { AppRouter } from './providers/router'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme/ThemeContext'
import { useTheme } from 'shared/hooks/useTheme'



const App = () => {

	const {toogleTheme, theme} = useTheme()

	return (
		<div className={`main ${theme}`}>
			<button onClick={toogleTheme}>Switch Theme</button>
			<AppRouter />
		</div>
	)
}

export default App
