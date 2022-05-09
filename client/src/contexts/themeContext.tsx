import { createContext } from 'react';

const defaultContext = {
    theme: '',
    toggleTheme: ''
}

const themeContext = createContext(defaultContext)

export default themeContext