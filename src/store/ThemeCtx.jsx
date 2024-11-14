import { createContext, useState } from "react";

export const ThemeCtx = createContext({
    theme: 'light',
    toggleTheme: () => {}
});

export default function ThemeCtxProvider({children}) {
    const [theme, setTheme] = useState('light');

    function toggleTheme() {
        setTheme(prev => {
            return prev === 'light' ? 'dark' : 'light';
        })
    }

    return <ThemeCtx.Provider value={{theme, toggleTheme}}>{children}</ThemeCtx.Provider>
}