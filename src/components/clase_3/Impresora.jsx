import { useState, useEffect } from "react"




const Impresora = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        console.log("Me gusta el pancito")
    }, [visible])
    

    const alternar = () => setVisible(() => !visible)

  return (
    <>
        {visible && <h3>Nombre</h3>}

        <button onClick={alternar}>Mostrar/Ocultar</button>
    </>
  )
}

export default Impresora