import { ThemeConext } from "@/context/ThemeContextProvider"
import { useContext } from "react"


const Main = () => {

    const {themeToggle} = useContext(ThemeConext)       

  return (
    <>
        <main className={themeToggle}>
            <h1>Main</h1>
        </main>

        <style jsx>{`
            main {
                height: 100vh;
            }
        `}</style>
    </>
  )
}

export default Main