import BulkEmailJobs from "./BulkEmailJobs";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export function Home() {
  return (
    <Container>
      <Card className="my-10">
        <Card.Body className="flex flex-row justify-between items-center">
          <p>Number of Emails Sent: 10</p>
          <Button variant="outline-primary">New Email Request</Button>
        </Card.Body>
      </Card>

      <BulkEmailJobs />
    </Container>
  );
}
