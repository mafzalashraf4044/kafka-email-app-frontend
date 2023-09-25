import { API_BASE_URL, PAGE_SIZE } from "@common/constants";
import { CreateBulkEmailJobRequest } from "@common/interfaces";

export const createBulkEmailJobRequest = async (
  data: CreateBulkEmailJobRequest
) => {
  // Make the mutation request to the server
  const response = await fetch(`${API_BASE_URL}/bulk-email-job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};

export const getBulkEmailJobRequest = async (currentPage = 1) => {
  const take = PAGE_SIZE;
  const skip = (currentPage - 1) * take;

  const response = await fetch(
    `${API_BASE_URL}/bulk-email-job?skip=${skip}&take=${take}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message);
  }

  return result;
};
