import React from "react";
import { Button, Form } from "React-bootstrap";

const Contacto = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <Button variant="warning">
        Enviar
      </Button>
    </Form>
  );
};
export default Contacto;
