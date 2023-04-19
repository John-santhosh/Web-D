function Book({ img, title, author, getBook, id, number }) {
  // const { img, title, author } = props;
  // const displayTitle = () => {
  //   console.log(getBook );
  // };
  return (
    <article className="book">
      <p className="number">#{number + 1}</p>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button onClick={() => getBook(id)}>details</button> */}
    </article>
  );
}

export default Book;

// children props
/* <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        // for children props
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button>
      </Book> */
