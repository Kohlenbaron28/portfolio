import Header from "../components/Header/Header";

function Contact() {
    return (
        <>
        <Header></Header>
        <div className="contact d-flex justify-center mt-50">
            <h1 className="contact-text m-10">Кликни, чтобы связаться со мной</h1>
        <div className="c1">
       <a href="https://t.me/Alexandra_kohlenbaron"><img src="./images/tg.png" alt="tg" width={150} height={150} /></a> 
        </div>
  
     <div className="c2">
      <a href="mailto:al.smir.2002@gmail.com"><img src="./images/post.png" alt="post" width={150} height={150} /></a>  
     </div>
      </div>
        </>
      
    );
  }
  
  export default Contact;