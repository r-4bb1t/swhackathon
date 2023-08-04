export const postSitters = async (seniorOnboardInfo) => {
  const result = await fetch(`${import.meta.env.VITE_API_HOST}/users/sitters`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(seniorOnboardInfo),
  });
  if (!result.ok) {
    throw new Error(`${result.status}: ${result.statusText}`);
  }
  return await result.json();
};

export const postLogin = async ({ phoneNum, password }) => {
  const result = await fetch(`${import.meta.env.VITE_API_HOST}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phoneNum, password }),
  });
  if (!result.ok) {
    throw new Error(`${result.status}: ${result.statusText}`);
  }
  return await result.json();
};

export const getUserInfo = async (phoneNum) => {
  const result = await fetch(
    `${import.meta.env.VITE_API_HOST}/users?phoneNum=${phoneNum}`,
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
