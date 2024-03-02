import axios from "axios";


const consultarCedula = async (cedula, token) => {
  const datos = axios
    .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes/${cedula}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => r.data);
  return datos;
};

const insertar = async (body, token) => {
  axios
    .post(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => r.data);
};
const consultarTodos = async (token) => {
  
  return axios
    .get(`http://localhost:8080/API/v1.0/Inscripcion/estudiantes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
    .then((r) => r.data)
    .catch((err) => {
      console.log(err);
    });
};

const generarToken = async (body) => {
  debugger;
  return axios
    .post(`http://localhost:8081/API/v1.0/Seguridad/autorizaciones/jwt`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((r) => r.data);
};


export const consultarCedulaFachada = async (cedula, token) => {
  return await consultarCedula(cedula,token);
};

export const insertarFachada = async (body,token) => {
  return await insertar(body,token);
};

export const consultarTodosFachada = async () => {
  return await consultarTodos();
};

export const generarTokenFachada = async (body) => {
  return await generarToken(body);
};
