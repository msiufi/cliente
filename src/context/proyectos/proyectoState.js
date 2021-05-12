import React, {useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO, 
        OBTENER_PROYECTOS,
        AGREGAR_PROYECTO,
        VALIDAR_FORMULARIO } from '../../types'


const ProyectoState = props =>{
  const proyectos = [
    {id:1, nombre: 'Tienda Virtual'},
    {id:2, nombre: 'Intranet'},
    {id:3, nombre: 'Diseño de Sitio Web'},
    {id:4, nombre: 'MernTask'}  
  ]
  const initialState = {
    proyectos:[],
    formulario : false,
    errorformulario : false
  }

  //Dispatch para ejecutar las acciones

  const [state, dispatch] = useReducer(proyectoReducer, initialState)

  //Serie de funciones para el CRUD

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  //Obtener los proyectos
  const obtenerProyectos = () =>{
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos
    })
  }

  //Agregar proyecto

  const agregarProyecto = proyecto=>{
    proyecto.id = uuidv4()

    //Insertar el proyecto en le state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto
    })

  }

  //Mostrar alerta de validacion de formulario

  const mostrarError = ()=>{
    dispatch({
      type:VALIDAR_FORMULARIO,

    })
  }

  return(
    <proyectoContext.Provider
        value={{
          proyectos: state.proyectos,
          formulario: state.formulario,
          errorformulario: state.errorformulario,
          mostrarFormulario,
          obtenerProyectos,
          agregarProyecto,
          mostrarError
        }}>
          {props.children}
    
    </proyectoContext.Provider>

    
  )
}

export default ProyectoState;