import Boton from "./Boton";


const Tarjeta = (props) => {

  const {image, title, description, bgColor} = props.destino;

  return (
    <>
      <div className="card">
        <img
          src={image}
          alt=""
        />
        <div className="card_text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <Boton bgColor={bgColor} />
      </div>

      <style jsx>{`
        .card {
            display: flex;
            flex-direction: column;
            width: 250px;
            border-radius: 13px;
            box-shadow: -0.5px 1.5px 10px -7px black;
            padding: 0 0 10px 0;
            
            & img {
                width: 100%;
                height: 175px;
                object-fit: cover;
                border-top-left-radius: 13px;
                border-top-right-radius: 13px;
            }
            & .card_text {
                text-align: center;

                & h3 {
                    font-size: 1.5rem;
                }
                & p {
                    font-size: 1rem;
                }
            }
        }
      `}</style>
    </>
  );
};

export default Tarjeta;
