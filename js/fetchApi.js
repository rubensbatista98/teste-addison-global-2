async function fecthApi(url) {
  const response = await fetch(url);

  if (response.status >= 400)
    throw new Error(
      "Sorry, there was an internal error in our system. Please, try again later."
    );

  const data = response.json();

  return data;
}

export default fecthApi;
