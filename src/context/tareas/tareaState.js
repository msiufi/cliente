import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {TAREAS_PROYECTO} from '../../types'

const tareaState = (props)=>{
  const initialState = {
    tareas:[
      {nombre: 'Elegir PLataform', estado:true, proyectoId: 1 },
      {nombre: 'Elegir Colores', estado:false, proyectoId: 2 },
      {nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3 },
      {nombre: 'Elegir hosting', estado:true, proyectoId: 4 },
      {nombre: 'Elegir PLataform', estado:true, proyectoId: 1 },
      {nombre: 'Elegir Colores', estado:false, proyectoId: 2 },
      {nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3 },
      {nombre: 'Elegir hosting', estado:true, proyectoId: 4 },
      {nombre: 'Elegir PLataform', estado:true, proyectoId: 1 },
      {nombre: 'Elegir Colores', estado:false, proyectoId: 2 },
      {nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3 },
      {nombre: 'Elegir hosting', estado:true, proyectoId: 4 },
      {nombre: 'Elegir Plataformas de pago', estado:false, proyectoId: 3 },
    ],
    tareasproyecto: null
  }

  //Crear el dispatch y el state
  const [state, dispatch]=useReducer(TareaReducer, initialState);

  //Crear funciones del proyecto

  //obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId)=>{
    dispatch({
      type:TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  return (
  
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
      
  )
  
}

export default tareaState;