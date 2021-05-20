import React, {useContext} from 'react';
import tareaContext from '../../context/tareas/tareaContext'
import proyectoContext from '../../context/proyectos/proyectoContext'

const Tarea = ({tarea}) => {

//Extraer si un proyecto esta acticvo
const proyectosContext = useContext(proyectoContext);
const {proyecto} = proyectosContext;


  //obtener la funcion del context de tarea
const tareasContext = useContext(tareaContext);

const {eliminarTarea, obtenerTareas, cambiarEstadoTarea} = tareasContext

//extraer el proyecto
const [proyectoActual] = proyecto;

//Funcion que se ejecuta cuando el usuario p´resiona el boton de eliminar tarea
const tareaEliminar = (id) =>{
  eliminarTarea(id)
  obtenerTareas(proyectoActual.id)
}

// funcion que modifica el estado de las tareas
const cambiarEstado = (tarea)=>{
  if(tarea.estado){
    tarea.estado = false
  } else {
    tarea.estado = true
  }
  cambiarEstadoTarea(tarea)
}
  return ( 

    <li className="tarea sombra">

      <p>{tarea.nombre}</p>

      <div className="estado">
        {tarea.estado
        ?
          ( 
            <button
              type="button"
              className="completo"
              onClick={()=>cambiarEstado(tarea)}
            >Completo</button>

          )
        :
          ( 
            <button
              type="button"
              className="Incompleto"
              onClick={()=>cambiarEstado(tarea)}
            >Incompleto</button>

          )
        }
      </div>

      <div className="acciones">
        <button
        type="button"
        className="btn btn-secundario"
        >Editar</button>
        
        <button 
          type="button"
          className="btn btn-primario"
          onClick={()=> tareaEliminar(tarea.id)}
        >Eliminar</button>
      </div>

    </li>
   );
}
 
export default Tarea;