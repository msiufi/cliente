

const Login = () => {

  const onChange=()=>{

  }

  return ( 
      <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
          <h1>Iniciar Sesión </h1>

              <form>

                <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
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
                      placeHolder="Tu password"
                      onChange={onChange}
                      />
                </div>
              </form>

        </div>
      </div>
   );
}
 
export default Login;