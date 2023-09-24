import { useMutation } from "react-query";
import BulkEmailJobs from "./BulkEmailJobs";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

import { createBulkEmailJobRequest } from "@common/api";

import CreateBulkEmailJob from "./CreateBulkEmailJob";

export function Home() {
  const {
    mutate,
    isError: isCreateBulkEmailJobError,
    error: createBulkEmailJobError,
    isLoading: createBulkEmailLoading,
  } = useMutation(createBulkEmailJobRequest);

  const handleCreateBulkEmailJobSubmit = async (data) => {
    mutate(data);
  };

  return (
    <Container>
      <Card className="my-10">
        <Card.Body className="flex flex-row justify-between items-center">
          <p>Number of Emails Sent: 10</p>
          <CreateBulkEmailJob
            isLoading={createBulkEmailLoading}
            isError={isCreateBulkEmailJobError}
            error={createBulkEmailJobError}
            onSubmit={handleCreateBulkEmailJobSubmit}
          />
        </Card.Body>
      </Card>

      <BulkEmailJobs />
    </Container>
  );
}
