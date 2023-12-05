import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalComponent = ({ show, handleClose, serviceDetails }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <div style={{ margin: "10px" }}>
          <Modal.Title>
            <h1>Detalles del Servicio</h1>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body >
        <div style={{ margin: "10px" }}>
          <p>{serviceDetails}</p>
        </div>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;