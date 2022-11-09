const URL = "https://api.github.com/users?per_page=5";

// fetch, then (promise) is the same as async, await (syntactic sugar for 'then' keyword)
export const getUsers = async () => {
  const response = await fetch(URL);
  return (await response).json();
};
// syntactic sugar is syntax within a programming language that make things easier to read or express
