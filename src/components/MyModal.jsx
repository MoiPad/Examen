import React, { useState } from "react";
import Entrada from "./Entrada";
import Swal from "sweetalert2";
import axios from "axios";

const MyModal = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    direccion: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { nombre, dni, direccion, email } = formData;

    if (!nombre || !dni || !direccion || !email) {
      Swal.fire("Advertencia", "Todos los campos son obligatorios", "warning");
      return;
    }

    try {
      const response = await axios.post(
        "https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado",
        formData,
      );
      onAdd(response.data);
      Swal.fire("Excelente", "Empleado agregado con exito", "success");
      setFormData({ nombre: "", dni: "", direccion: "", email: "" });
    } catch (error) {
      Swal.fire("Advertencia", "No se pudo agregar el empleado", "warning");
    }
  };

  return (
    <div className="modal fade" id="MyModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Empleado</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Entrada
              label="Nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingrese el nombre"
              name="nombre"
            />
            <Entrada
              label="DNI"
              type="text"
              value={formData.dni}
              onChange={handleChange}
              placeholder="Ingrese el DNI"
              name="dni"
            />
            <Entrada
              label="Dirección"
              type="text"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Ingrese la dirección"
              name="direccion"
            />
            <Entrada
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingrese el email"
              name="email"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
