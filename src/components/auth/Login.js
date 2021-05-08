import React , {useState} from 'react'

const Login = () => {

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
                <div className="campo-form">
                  <input type="submit" className="btn btn-primario btn-block"
                  value="iniciar Sesión" />

                </div>
              </form>

        </div>
      </div>
   );
}
 
export default Login;