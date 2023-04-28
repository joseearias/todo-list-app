import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box>
        <Typography variant="h1" component="h1" mt="50px">
          Hello
        </Typography>
        <Typography>This is a test</Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
