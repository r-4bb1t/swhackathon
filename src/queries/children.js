export const getChild = async (id) => {
  const result = await fetch(
    `${import.meta.env.VITE_API_HOST}/users/parents/${id}`,
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

export const getChildren = async ({ sitterUserId, returnCount }) => {
  const result = await fetch(
    `${import.meta.env.VITE_API_HOST}/users/parents/recommend/${sitterUserId}${
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
