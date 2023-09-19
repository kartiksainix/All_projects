import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import {books} from'./books'
import Book from './Book'

// function Greeting(){
//     return <h2>My First Component</h2>
// }

// function Greeting(){
//     return React.createElement('h2',{},'My First Page')
// }


// const EventExamples = () =>{

//     const handleFormInput = (e) =>{
//         console.log(e);
//         console.log(e.target);
//         console.log(e.target.name);
//         console.log(e.target.value);
//     };
//     // const test = (test) =>{
//     //     console.log(test);
//     //     console.log(test.target);
//     //     console.log(test.target.name);
//     //     console.log(test.target.value);
//     // };
//     const handleButtonClick = ()=> {
//         alert('handle button click');
//     };

//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         console.log(e)
//         console.log('form submitted successfully');
//     };

//     return(
//         <section>
//             <form onSubmit={handleFormSubmit}>
//                 <h2>Typical Form</h2>
//                 <input type="text" name="product" value="" onChange={handleFormInput} style={{margin: '1rem 0'}} />
//                 <button type="button" onClick={handleButtonClick}>click me</button>
//                 <button type="submit" onClick={handleFormSubmit}>submit</button>
//             </form>
//         </section>
//     );
// }

const BookList = () =>{
    // const someValue = 'shakeAndBake';
    // const displayValue = () =>{
    //     console.log(someValue);
    // }

    // const getBook = (id) =>{
    //     const book = books.find((book)=> book.id === id );
    //     console.log(book);
    // }
    return (
        <>
        <h1>amazon best sellers</h1>
        <section className="booklist">
            {/* <EventExamples/> */}
            {
                books.map((book,index)=>{
                    // const {img, title, author, id} = book;
                    // return <Book {...book} key={book.id} displayValue={displayValue}/>
                    // return <Book {...book} key={book.id} getBook={getBook} number={index}/>
                    return <Book {...book} key={book.id}  number={index}/>

                })  
            }
        </section>
        </>
    );
};

//  second way of writing - 
// const BookList = () =>{
//     return (
//         <section className="booklist">
//             {
//                 books.map((book)=>{
//                     const {img, title, author, id} = book;
//                     return <Book img={img} title={title} author={author} key={id}/>
//                 })  
//             }
//         </section>
//     );
// };

// --------------book shifted to another js file----------------

// const firstBook = {
//     img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//     title: "Atomic Habits",
//     author: "James Clear",
// }

// const secondBook = {
//     img: "https://m.media-amazon.com/images/I/51KkT9Z1kGL._SX279_BO1,204,203,200_.jpg",
//     title: "Shrimad Bhagwat Geeta Yatharoop",
//     author: "A.C. Bhaktivendanta Swami Prabhupada",
// }

// const thirdBook = {
//     img: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//     title: "Ikigai",
//     author: "Hector Garcia",
// }

// const fourthBook = {
//     img: "https://m.media-amazon.com/images/I/51Hfv2MfNGL._SX331_BO1,204,203,200_.jpg",
//     title: "Rich Dad Poor Dad",
//     author: "Robert T. Kiyosaki",
// }

// const BookList = () => {
//     return(
//         <section className = 'booklist'>
//             <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
//             <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}>
//                 {/* <p>
//                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
//                     dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
//                     book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
//                     unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and 
//                     more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//                 </p>
//                 <button type="submit"></button> */}
//             </Book>
//             <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
//             <Book img={fourthBook.img} title={fourthBook.title} author={fourthBook.author} />
//         </section>
//     );
// }



// const Book = (props) =>{
//     const {img, title, author, children} = props;
//     return (
//         <article className = 'book'>
//             <img src={img} alt={title}/>
//             <h2>{title}</h2>
//             <h4>{author}</h4>
//             {children}
//         </article>
//     );
// }

// you can also use destructuring like for example - const {img, title, author} = props
// and then you can simply write img instead of props.img , and same goes for other elements.

// const Book = () =>{
//     // console.log(props);
//     return (
//         <article className = 'book'>
//             <Image img = {firstBook.img}/>
//             <Title title = {firstBook.title}/>
//             <Author author = {firstBook.author}/>
//             {/* {console.log(props)} you can also write in this way before the parent element */}
//         </article>
//     );
// }

// const Image = (props) =>{
//     return(
//         <img src={props.img} alt={props.title}/>
//     );
// }

// const Title = (props) =>{
//     return(
//         <h4>{props.title}</h4>
//     );
// }

// const Author = (props) =>{
//     return(
//         <h3>{props.author}</h3>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList/>)