export const getTodos = () => {
  return fetch('http://localhost:8081/todos')
    .then(res => res.json());
};
