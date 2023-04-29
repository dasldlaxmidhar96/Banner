import { Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="banner">
        <h1>Welcome to our Website</h1>
        <h2>Learn more about our company and services</h2>
        <button onClick={handleButtonClick}>Click me!</button>
      </section>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you for your interest in our company!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            We appreciate your time and consideration. We hope to hear from you
            soon.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Banner;
