import Boton from "@/components/clase_2/Boton"
import SeccionTarjetas from "@/components/clase_2/SeccionTarjetas"
import Tarjeta from "@/components/clase_2/Tarjeta"
import BooksContextProvider from "@/context/BooksContextProvider"



const Services = () => {
  return (
    <>
        <BooksContextProvider>
          <SeccionTarjetas />
        </BooksContextProvider>
    </>
  )
}

export default Services