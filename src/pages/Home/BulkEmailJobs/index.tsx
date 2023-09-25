import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { format } from "date-fns";

import { PAGE_SIZE } from "@common/constants";
import { BulkEmailJob } from "@common/interfaces";
import { Pagination } from "@components";
import { JobStatus } from "@common/enums";

interface BulkEmailJobProps {
  totalPages: number;
  currentPage: number;
  onPaginationClick: Function;
  data: BulkEmailJob[];
}

export default function BulkEmailJobs({
  totalPages,
  currentPage,
  onPaginationClick,
  data,
}: BulkEmailJobProps) {
  const getBadgeLevel = (status: JobStatus) => {
    switch (status) {
      case JobStatus.Completed:
        return "success";
        break;
      case JobStatus.Pending:
        return "secondary";
        break;
      case JobStatus.NotCompleted:
        return "danger";
        break;
    }
  };

  return (
    <Card className="my-10">
      <Card.Header className="font-bold flex flex-row justify-start items-center">
        Bulk Email Jobs
      </Card.Header>
      <Card.Body>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Number of Emails</th>
              <th>Job ID</th>
              <th>Status</th>
              <th>Created On</th>
            </tr>
          </thead>
          <tbody>
            {data.map((job, index) => (
              <tr key={job.jobId}>
                <td>{(currentPage - 1) * PAGE_SIZE + (index + 1)}</td>
                <td>{job.numberOfEmails}</td>
                <td>{job.jobId}</td>
                <td>
                  <Badge bg={getBadgeLevel(job.status)}>{job.status}</Badge>
                </td>
                <td>{format(new Date(job.createdAt), "MM/dd/yyyy hh:mm a")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
      <Card.Footer className="flex flex-row justify-end items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={onPaginationClick}
        />
      </Card.Footer>
    </Card>
  );
}
