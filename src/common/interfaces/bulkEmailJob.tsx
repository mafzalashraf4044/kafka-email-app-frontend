import { JobStatus } from "@common/enums";

export interface CreateBulkEmailJobRequest {
  numberOfEmails: number;
}

export interface BulkEmailJob {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  jobId: string;
  status: JobStatus;
  numberOfEmails: number;
}
