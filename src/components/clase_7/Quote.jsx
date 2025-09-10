






const Quote = ({currentQuote}) => {

    const {quote, author} = currentQuote;

  return (
    <>
        <div>
            <blockquote>{quote}</blockquote>
            <h3>{author}</h3>
        </div>
    </>
  )
}

export default Quote