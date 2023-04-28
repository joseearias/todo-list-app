import { useLoaderData } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import TodoList from "../components/TodoList";

const HomePage = () => {
  const todos = useLoaderData();

  return (
    <Container component="main" maxWidth="md">
      <Box>
        <Typography variant="h1" component="h1" mt="50px">
          Hello
        </Typography>
        <Typography>This is a test</Typography>
        <TodoList todos={todos} />
      </Box>
    </Container>
  );
};

export default HomePage;

export const loader = async () => {
  const response = await fetch("http://localhost:3000/todos");

  if (!response.ok) {
    //
  } else {
    const resData = await response.json();
    return resData;
  }
};
