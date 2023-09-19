const Book = (props) =>{
    // const {img, title, author, displayValue} = props;
    // const {img, title, author, getBook, id, number} = props;
    const {img, title, author, number} = props;

    // const getSingleBook = () =>{
    //     getBook(id);
    // }
    return (
        <article className = 'book'>
            <img src={img} alt={title}/>
            <h2 style={{color: "blue"}}>{title}</h2>
            <h4>{author}</h4>
            {/* <button type="submit" onClick={displayValue}>click me</button> */}
            {/* <button type="button" onClick={getSingleBook}>click me</button> */}
            {/* <br/> */}
            <span className="number">{`# ${number+1}`}</span>
        </article>
    );
}

export default Book