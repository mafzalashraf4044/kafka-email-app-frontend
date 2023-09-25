import { useState, ChangeEvent } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { useModal, ModalStateInterface } from "@hooks";

interface CreateBulkEmailJobProps {
  onSubmit: Function;
  isLoading: boolean;
}

export default function CreateBulkEmailJob({
  onSubmit,
  isLoading,
}: CreateBulkEmailJobProps) {
  const [numberOfEmails, setNumberOfEmails] = useState<string | number>("");
  const { isOpen, onClose, toggleModal } = useModal<ModalStateInterface>();

  const handleNumberOfEmailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
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
          <Modal.Title className="font-bold">Send Emails</Modal.Title>
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
              <Spinner
                className="ml-5"
                animation="border"
                role="status"
                size="sm"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
