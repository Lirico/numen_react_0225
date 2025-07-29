import { ThemeConext } from "@/context/ThemeContextProvider"
import { useContext } from "react"

const Footer = () => {

    const {themeToggle} = useContext(ThemeConext)    

  return (
    <>
      <footer className={themeToggle}>
        <h2>Footer</h2>
      </footer>

      <style jsx>{`
        footer {
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default Footer;
