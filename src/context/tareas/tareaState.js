import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

const TareaState = (props)=>{
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
  }

  //Crear el dispatch y el state
  const [state, dispatch]=useReducer(TareaReducer, initialState);

  return (
  
    <TareaContext.Provider
      value={{
        tareas: state.tareas
      }}
    >
      {props.children}
    </TareaContext.Provider>
      
  )
  
}

export default TareaState;