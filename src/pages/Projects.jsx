import Header from "../components/Header/Header";


function Projects() {
    return (
    <>
    <Header></Header>
      <div className="project" >
        
       <h1 className="mb-40">Мои проекты</h1>
       <div>
      
      <div className="pr1 mb-10">
       <img src="/images/nike.png" width={150} height={70} alt="nike" />
       <a href="https://kohlenbaron28.github.io/nike/">Адаптивный лендинг с выплывающим меню для смартфонов</a>
    </div>
    <div className="pr1 mb-10">
    <img src="/images/ill.svg" width={150} height={100} alt="ill" />
       <a href="https://kohlenbaron28.github.io/react-landing/">Адаптивный лендинг на React</a>
    </div>
    <div className="pr1 mb-10">
    <img src="/images/logo.png" width={150} height={100} alt="sneakers" />
      <a href="https://kohlenbaron28.github.io/sneakers/">Интернет-магазин на React с интеграцией бэкенда</a> 
    </div>
       </div>

      </div>
    </>
    );
  }
  
  export default Projects;