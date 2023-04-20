import { Box, Container, CssBaseline, Typography } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="md">
        <Box>
          <Typography variant="h1" component="h1" mt="50px">
            Hello
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
