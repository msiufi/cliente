import React , {useState, useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from '../../context/autenticacion/authContext'

const Login = (props) => {

  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const {mensaje, autenticado, iniciarSesion} = authContext;

   //En caso de que el password o usuario no exista

   useEffect(() => {
    if(autenticado){
      props.history.push('/proyectos')
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    
  }, [mensaje, autenticado, props.history]);


  //State para inisio de sesion

  const [usuario, guardarUsuario]=useState({
    email:'',
    password:''
  })

  //extraer el usuario

  const {email, password} = usuario

  const onChange= e=>{
    guardarUsuario({
      ...usuario,
      [e.target.name] : e.target.value
    })
  }

  const onSubmit=e=>{
    e.preventDefault();

    // Validar que no haya campos vacios
    if(email.trim() === '' || password.trim() === '' ){
      mostrarAlerta('Todos los campos son obligatorios', 'alerta-error');
    }


    // pasarlo al action
    iniciarSesion({email, password});
  }

  return ( 
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Iniciar Sesión </h1>

              <form
                onSubmit={onSubmit}
              >

                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeHolder="Tu email"
                      value={email}
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
                {alerta ? (
            <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
          ) : null}
                <div className="campo-form">
                  <input type="submit" className="btn btn-primario btn-block"
                  value="iniciar Sesión" />

                </div>
              </form>

              <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                
                Obtener Cuenta

              </Link>

        </div>
      </div>
   );
}
 
export default Login;