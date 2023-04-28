const TodoList = () => {
  return;
};

export default TodoList;

export const loader = async () => {
  const response = await fetch("http://localhost:3000/todos");

  if (!response.ok) {
    console.log("There was an error handling your request");
  } else {
    return response;
  }
};
