export const getCareRequested = async ({ sitterUserId, returnCount }) => {
  const result = await fetch(
    `${
      import.meta.env.VITE_API_HOST
    }/cares/sitter/careRequested/${sitterUserId}${
      returnCount ? `?returnCount=` + returnCount : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!result.ok) {
    throw new Error(`${result.status}: ${result.statusText}`);
  }
  return await result.json();
};

export const getCareRequestedByParents = async ({
  sitterUserId,
  returnCount,
}) => {
  const result = await fetch(
    `${
      import.meta.env.VITE_API_HOST
    }/cares/sitter/careRequestedByParents/${sitterUserId}${
      returnCount ? `?returnCount=` + returnCount : ""
    }`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!result.ok) {
    throw new Error(`${result.status}: ${result.statusText}`);
  }
  return await result.json();
};
