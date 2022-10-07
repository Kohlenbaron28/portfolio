import './Main.css';
import Header from '../Header/Header';

function Main() {
 
          return (
          
      
        <div className="home__container d-flex  mt-30">
      <div className='home__top d-flex flex-wrap'>  
        <div className="home__image d-flex align-center mt-20">
        <img src="/images/me.jpg" alt="me" />
        </div>
        <div className="home__title">
        <h2 className="title-home-1 mb-10">Front-end-разработчик</h2>
        <h1 className="title-home-2 mb-10">Смирнова Александра Алексеевна</h1>
        <p>20 лет, 
        Владею HTML, CSS, JS, React</p>
       </div></div>

       <div className="home__info mt-30 mb-30"><h2>Обо мне</h2>
        <p>Начинающий Front-end-разработчик, очень быстро обучаюсь. На данный момент владею HTML, CSS, JS, 
       Git, React. Способна интегрировать в проекты bootstrap, scss, Jquery.</p></div>
       
        </div>
       
      
       
      
      
    );
  }
  
  export default Main;