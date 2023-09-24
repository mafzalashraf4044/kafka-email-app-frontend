import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { useModal } from "@hooks";

interface CreateBulkEmailJobProps {
  isError: boolean;
  error: any;
  onSubmit: Function;
  isLoading: boolean;
}

export default function CreateBulkEmailJob({
  isError,
  error,
  onSubmit,
  isLoading,
}: CreateBulkEmailJobProps) {
  const [numberOfEmails, setNumberOfEmails] = useState<number>();
  const { isOpen, onClose, toggleModal } = useModal();

  const handleNumberOfEmailsChange = (e) => {
    const { value } = e.target;
    setNumberOfEmails(parseInt(value, 10));
  };

  const handleSubmit = () => {
    onSubmit({
      numberOfEmails,
    });
  };

  return (
    <div>
      <Button variant="outline-primary" onClick={toggleModal}>
        New Email Request
      </Button>

      <Modal centered show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Send Emails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number of Emails</Form.Label>
              <Form.Control
                required
                value={numberOfEmails}
                onChange={handleNumberOfEmailsChange}
                autoFocus
                type="number"
                placeholder="E.g 10000"
              />
              {isError && (
                <Form.Control.Feedback type="invalid">
                  Something went wrong!
                </Form.Control.Feedback>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onClose}>
            Close
          </Button>
          <Button variant="outline-secondary" onClick={handleSubmit}>
            Submit
            {isLoading && (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
