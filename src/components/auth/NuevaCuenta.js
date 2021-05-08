import React , {useState} from 'react'
import {Link} from 'react-router-dom'

const NuevaCuenta = () => {

  //State para inisio de sesion

  const [usuario, guardarUsuario]=useState({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
  })

  //extraer el usuario

  const {nombre, email, password, confirmar} = usuario

  const onChange= e=>{
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit=e=>{
    e.preventDefault();

    // Validar que no haya campos vacios

    //Password minimo de 6 caracteres

    // Que los dos pass sean iguales

    // pasarlo al action
  }

  return ( 
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Obtener una Cuenta</h1>

              <form
                onSubmit={onSubmit}
              >

                <div className="campo-form">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeHolder="Tu Nombre"
                      value={nombre}
                      onChange={onChange}
                      />
                </div>
                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      placeHolder="Tu email"
                      onChange={onChange}
                      />
                </div>
                <div className="campo-form">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      placeHolder="Tu password"
                      onChange={onChange}
                      />
                </div>
                <div className="campo-form">
                    <label htmlFor="confirmar">Confirmar Password</label>
                    <input
                      type="password"
                      id="confirmar"
                      name="confirmar"
                      placeHolder="Repite tu Password"
                      value={confirmar}
                      onChange={onChange}
                      />
                </div>
                <div className="campo-form">
                  <input type="submit" className="btn btn-primario btn-block"
                  value="Regristrarme" />

                </div>
              </form>

              <Link to={'/'} className="enlace-cuenta">
                
                Volver a Iniciar Sesión

              </Link>

        </div>
      </div>
   );
}
 
export default NuevaCuenta;