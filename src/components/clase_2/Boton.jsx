


const Boton = (props) => {

    const {bgColor} = props;

    return (
        <>
            <button>Comprar</button>

            <style jsx>{`
                button {
                    background-color: ${bgColor};
                    border: none;
                    border-radius: 5px;
                    box-shadow: 0px 3px 6px -3.5px black;
                    color: white;
                    padding: 10px 20px;
                    text-align: center;
                    text-transform: uppercase;
                    width: 75%;
                    margin: 0 auto;
                }
            `}</style>
        </>
    )
}



export default Boton;