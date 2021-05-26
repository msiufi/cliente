import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from '../../context/autenticacion/authContext'

const NuevaCuenta = (props) => {
  //extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const {mensaje, autenticado, registrarUsuario} = authContext;

  //En caso de que el usuario se haya autenticado o registrado o sea un registro doble

  useEffect(() => {
    if(autenticado){
      props.history.push('/proyectos')
    }

    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    
  }, [mensaje, autenticado, props.history]);

  //State para inisio de sesion

  const [usuario, guardarUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  //extraer el usuario

  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacios

    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    //Password minimo de 6 caracteres
    if (password.length < 6) {
      mostrarAlerta(
        "El Password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }
    // Que los dos pass sean iguales
    if(password !== confirmar){
      mostrarAlerta(
        "Los passwords no coinciden",
        "alerta-error"
      );
      return;
    }
    // Pasarlo al action

    registrarUsuario({
      nombre,
      email,
      password
    });
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Obtener una Cuenta</h1>

        <form onSubmit={onSubmit}>
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
          {alerta ? (
            <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
          ) : null}
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Regristrarme"
            />
          </div>
        </form>

        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
