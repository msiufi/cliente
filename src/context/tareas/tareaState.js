import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import clienteAxios from "../../config/axios";

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const tareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
  };

  //Crear el dispatch y el state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear funciones del proyecto

  //obtener las tareas de un proyecto
  const obtenerTareas = async (proyecto) => {
    
    try {
      const resultado = await clienteAxios.get("/api/tareas", { params: { proyecto }})
      ;
      console.log(resultado);
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Agregar una tarea al prpy seleccionado
  const agregarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.post("/api/tareas", tarea);
      console.log(resultado);
      dispatch({
        type: AGREGAR_TAREA,
        payload: tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // valida y muestra un error en caso de que sea necesario
  const validarTarea = (tarea) => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //Eliminar tarea por id
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, { params : {proyecto}})
      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //cambia el estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  //Extrae una tarea para edicion

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  //actualizar tarea

  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  // limpiar state de tarea sleccionada despues de la edicion
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default tareaState;
