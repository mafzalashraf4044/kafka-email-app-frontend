import { useState } from "react";
import { useQuery, useMutation, TError } from "@tanstack/react-query";
import BulkEmailJobs from "./BulkEmailJobs";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";

import { PAGE_SIZE, BULK_EMAIL_JOB_CREATED_MESSAGE } from "@common/constants";
import { getBulkEmailJobRequest, createBulkEmailJobRequest } from "@common/api";
import { CreateBulkEmailJobRequest } from "@common/interfaces";

import CreateBulkEmailJob from "./CreateBulkEmailJob";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleReactQueryError = (error: TError) => {
    toast.error(error.message);
  };

  const { data: bulkEmailJobs } = useQuery(
    ["bulkEmailJobs", currentPage],
    () => getBulkEmailJobRequest(currentPage),
    {
      initialData: { count: 0, data: [] },
      onError: handleReactQueryError,
    }
  );

  const createBulkEmailJob = useMutation(createBulkEmailJobRequest, {
    onError: handleReactQueryError,
    onSuccess: () => toast.success(BULK_EMAIL_JOB_CREATED_MESSAGE),
  });

  const handlePaginationClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreateBulkEmailJobSubmit = (data: CreateBulkEmailJobRequest) => {
    createBulkEmailJob.mutate(data);
  };

  const totalPage = Math.ceil(bulkEmailJobs.count / PAGE_SIZE);

  return (
    <Container>
      <Card className="my-10">
        <Card.Body className="flex flex-row justify-between items-center">
          <p className="font-bold">Number of Emails Sent: 10</p>
          <CreateBulkEmailJob
            isLoading={createBulkEmailJob.isLoading}
            isError={createBulkEmailJob.isError}
            error={createBulkEmailJob.error}
            onSubmit={handleCreateBulkEmailJobSubmit}
          />
        </Card.Body>
      </Card>

      <BulkEmailJobs
        totalPages={totalPage}
        currentPage={currentPage}
        onPaginationClick={handlePaginationClick}
        data={bulkEmailJobs.data}
      />
    </Container>
  );
}
