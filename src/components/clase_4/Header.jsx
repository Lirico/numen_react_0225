import { ThemeConext } from "@/context/ThemeContextProvider"
import { useContext } from "react"

const Header = () => {

    const {themeToggle, updateTheme, themeIconToggle} = useContext(ThemeConext)

  return (
    <>
        <header className={themeToggle}>
            <button onClick={updateTheme}>{themeIconToggle}</button>
        </header>

        <style jsx>{`
            header {
                padding: 20px 5px;
            }
            button {
                background-color: transparent;
                border: none;
                font-size: 2rem;
            }
        `}</style>
    </>
  )
}

export default Header