import React, { useEffect, useState } from "react";
import axios from "axios";
import MyModal from "./components/MyModal";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [empleados, setEmpleados] = useState([]);

  const fetchEmpleados = async () => {
    try {
      const response = await axios.get(
        "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado",
      );
      setEmpleados(response.data);
    } catch (error) {
      console.error("Error fetching empleados:", error);
    }
  };

  const addEmpleado = (empleado) => {
    setEmpleados([...empleados, empleado]);
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Listado de Empleados</h1>
      <button
        className="btn btn-success mb-4"
        data-bs-toggle="modal"
        data-bs-target="#MyModal"
      >
        Agregar Empleado
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Dirección</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.nombre}</td>
              <td>{empleado.dni}</td>
              <td>{empleado.direccion}</td>
              <td>{empleado.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyModal onAdd={addEmpleado} />
    </div>
  );
};

export default App;
