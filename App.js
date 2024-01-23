import './App.css';
import {Testimonio} from'./componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      </div>
      <Testimonio 
      nombre='Emma Bostian'
      pais='Suecia'
      imagen='emma'
      cargo='ingeniera de Software'
      empresa='Amazon'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudia JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis srueños como ingeniero de software en Spotify.'
      />
      <Testimonio
       nombre='Shawn Wang'
       pais='Singapur'
       imagen='shawn'
       cargo='Ingeniero de Software'
       empresa='Spotify'
       testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
      />
      <Testimonio
      nombre='Sarah Chima'
      pais='Nigeria'
      imagen='sarah'
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
      />
    </div>
  );
}

export default App;
