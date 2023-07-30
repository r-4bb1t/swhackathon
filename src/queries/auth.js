export const postSitters = async (seniorOnboardInfo) => {
  const result = await fetch(`${import.meta.env.VITE_API_HOST}/users/sitters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: seniorOnboardInfo,
  });
  if (!result.ok) {
    throw new Error(`${result.status}: ${result.statusText}`);
  }
  return await result.json();
};
