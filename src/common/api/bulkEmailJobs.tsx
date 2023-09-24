import { API_BASE_URL } from "@common/constants";

export const createBulkEmailJobRequest = async (data) => {
  // Make the mutation request to the server
  const response = await fetch(`${API_BASE_URL}/bulk-email-job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // Return the response data
  return response.json();
};
