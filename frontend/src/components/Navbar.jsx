import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography>Hi</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
