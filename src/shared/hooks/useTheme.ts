import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "app/theme/ThemeContext"
import { useContext } from "react"

interface UseThemeResult {
  toogleTheme: () => void
  theme?: Theme
}

export function useTheme(): UseThemeResult {

  const {theme, setTheme} = useContext(ThemeContext)

	const toogleTheme = () => {
		const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT
		setTheme?.(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

  return {
    theme,
    toogleTheme
  }

}