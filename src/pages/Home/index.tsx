import { useState, useEffect, useRef } from "react";
import { useQuery, useMutation, TError } from "@tanstack/react-query";
import BulkEmailJobs from "./BulkEmailJobs";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import io from "socket.io-client";

import {
  PAGE_SIZE,
  BULK_EMAIL_JOB_CREATED_MESSAGE,
  API_BASE_URL,
  EVENTS,
} from "@common/constants";
import {
  getBulkEmailJobRequest,
  createBulkEmailJobRequest,
  getSentEmailsCountRequest,
} from "@common/api";
import { CreateBulkEmailJobRequest } from "@common/interfaces";

import CreateBulkEmailJob from "./CreateBulkEmailJob";

const socket = io(API_BASE_URL, {
  transports: ["websocket"],
});

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [sentEmailsCount, setSentEmailsCount] = useState(0);
  const sentEmailsCountRef = useRef(sentEmailsCount);

  useEffect(() => {
    socket.on(EVENTS.BULK_EMAIL_JOB_COMPLETED, (message) => {
      toast.success(`Email Job Completed: ${message.jobId}`);
      setSentEmailsCount(
        parseInt(sentEmailsCountRef.current, 10) + message.numberOfEmails
      );
    });
  }, []);

  const handleReactQueryError = (error: TError) => {
    toast.error(error.message);
  };

  useQuery(["sentEmailsCount"], getSentEmailsCountRequest, {
    onError: handleReactQueryError,
    onSuccess: (data) => {
      setSentEmailsCount(data.count);
      sentEmailsCountRef.current = data.count;
    },
    staleTime: Infinity,
    retry: false,
  });

  const { data: bulkEmailJobs } = useQuery(
    ["bulkEmailJobs", currentPage],
    () => getBulkEmailJobRequest(currentPage),
    {
      initialData: { count: 0, data: [] },
      onError: handleReactQueryError,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
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
          <p className="font-bold">Number of Emails Sent: {sentEmailsCount}</p>
          <CreateBulkEmailJob
            isLoading={createBulkEmailJob.isLoading}
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
