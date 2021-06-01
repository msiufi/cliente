import React, {useContext, useState, useEffect} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext'
import tareaContext from '../../context/tareas/tareaContext'

const FormTarea = () => {
  //Extraer si un proyecto esta acticvo
const proyectosContext = useContext(proyectoContext);
const {proyecto} = proyectosContext;


//obtener la funcion del context de tarea
const tareasContext = useContext(tareaContext);

const{tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea}= tareasContext

//Effect que detecta si hay una tarea selecionada
useEffect(()=>{
  if(tareaseleccionada !== null) {
    guardarTarea(tareaseleccionada)
  } else {
    guardarTarea({
      nombre:''
    })
  }
}, [tareaseleccionada])

//state del formulario
const [tarea, guardarTarea] = useState({
  nombre:'',
})

//Extraer el nombre del proyecto
const {nombre} = tarea;

// Si no hay proyecto seleccionado
if(!proyecto) return null;

//Array distructuring para extraer el proyecto actual
const [proyectoActual] = proyecto;

//Leer los valores del formulario

const handleChange = (e)=>{
  guardarTarea({
    ...tarea,
    [e.target.name] : e.target.value
  })
}

const onSubmit = (e)=>{
  e.preventDefault();

  //Validar
  if(nombre.trim() === ''){
    validarTarea();
    return;
  }

  //Si es edicion o si es nueva tarea
if(tareaseleccionada === null){
  // agregar la nueva tarea al state de tarea
  tarea.proyecto = proyectoActual._id;
  agregarTarea(tarea);
} else {
  //actualizar tarea existente
actualizarTarea(tarea)
//elimina tarea seleccionada del state
limpiarTarea()
}

  

  

  // Obtener y filtrar las tareasd el pryecto actual
  obtenerTareas(proyectoActual.id);

  //reiniciar el form
  guardarTarea({
    nombre:''
  })
}

  return ( 
      <div className="formulario">
    <form
      onSubmit={onSubmit}
    >
      <div className="contenedor-input">
        <input type="text"
        className="input-text"
        placeholder="NombreTarea..."
        name="nombre"
        value={nombre} 
        onChange={handleChange}
        />

      </div>

      <div className="contenedor-input">
        <input type="submit"
        className="btn btn-primario btn-submit btn-block"
        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'} />
      </div>
    </form>

  {errortarea? <p className="mensaje error">El nombre de la tarea es obligatorio</p>:null}
    </div>
   );
}
 
export default FormTarea;