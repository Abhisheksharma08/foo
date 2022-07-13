import React from "react";
// (this es6 module)
// always return jsx
// stateless functional component
import  ReactDOM  from "react-dom"
;
// always return single element
// jsx rules
// div/section/ article pr fragment
// use camelcase for html attribute
// close every element
// formating
// classname instead ofclass

// function Greeting(){
//   return <h4> this is maichel and this is my frist component</h4>;
// }





// nested components,React tools

// function Greeting (){
//   return (
//     <div>    
//       <Person/>
//       <Message/>

//     </div>
//   )
// }
// ReactDOM.render(<Greeting />,document.getElementById('root'));

// const Person =() => <h2>this is carry</h2>
// const Message = () => {
//   return <p>this is the secret code</p>
// } 

// ReactDOM.render(<Greeting />,document.getElementById('root'));


//  mini book project
// css
import './index.css';
// setup vaRS
const books = [
  {  
  id:1,
  img :"data:image/jpeg;base64,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"
  ,title: "A Concise Textbook of Human Psychology" 
  , author: 'Max panther',

},
{  id:2,
  img: 'https://th.bing.com/th/id/OIP.wsLTs7V6nrfpII0H4Q7SGAHaFE?w=227&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
, title: "where are you" ,
   author: 'Max pane',
},
{ id:3,
  img: 'https://th.bing.com/th/id/OIP.9gvfjI8hlqe7jB0rsgRpiAHaHa?w=164&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7'
  , title: "the book of bibles",
  author: 'larry dutta',
}
]
 
function BookList(){
  return(
    <section className='booklist'>
      {books.map((book) => {
        
        return <Book key ={book.id} {...book}></Book> ;    
        
        })};
      
    </section>
  );
};


const Book = ({img,title,author})=> {
  // attribute and eventHandler
  // onclick ,onMouseOver
  // const {img,title,author,}= props.book;
  const clickHandler = (e)=>{
    console.log(e);
    console.log(e.target);
    alert('hello world');
  };
  const complexExample = (author) => {
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={()=> {
      console.log(title);
    }}>
      
      <img
        src={img} alt="" /> 
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        refrence example
      </button>
      <button type="button" onClick= { ()=>complexExample(author)}>
        more complex example
      </button>
      
    </article>
    );
  };

ReactDOM.render(<BookList/> , document.getElementById('root'))