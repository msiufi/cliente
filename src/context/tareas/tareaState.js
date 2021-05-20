import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

import { 
  TAREAS_PROYECTO, 
  AGREGAR_TAREA,
  VALIDAR_TAREA 
} from "../../types";

const tareaState = props => {
  const initialState = {
    tareas: [
      { nombre: "Elegir PLataform", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir PLataform", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir PLataform", estado: true, proyectoId: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoId: 2 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 },
      { nombre: "Elegir hosting", estado: true, proyectoId: 4 },
      { nombre: "Elegir Plataformas de pago", estado: false, proyectoId: 3 }
    ],
    tareasproyecto: null,
    errortarea: false
  };

  //Crear el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear funciones del proyecto

  //obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId
    });
  };

  //Agregar una tarea al prpy seleccionado
  const agregarTarea = (tarea)=>{
    dispatch({
      type:AGREGAR_TAREA,
      payload: tarea
    })
  }
// valida y muestra un error en caso de que sea necesario
  const validarTarea = (tarea)=>{
    dispatch({
      type:VALIDAR_TAREA      
    })
  }

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea:state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default tareaState;
