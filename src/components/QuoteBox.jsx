const QuoteBox = ({quote}) => {
  return (
    <section className="bg-imagen__rec">
      <article> 
        <p>{quote.phrase}</p>
        <p className="autor">"{quote.author}"</p>
        <img className="vector" src="/images/Vector.png" alt="" />
      </article>  
    </section>
  );
};

export default QuoteBox;
