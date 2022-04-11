import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Button,
  MenuItem,
  Container,
  Link,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/svg/logo.svg";
import { Controls } from "./Helpers/Controls";

const appMain = {
  backgroundColor: "#722A8D",
};

const buttonStyles = {
  color: "#000",
  backgroundColor: "#fff",
  textTransform: "none",
  borderRadius: "5rem",
};
const buttonStyles2 = {
  color: "#fff",
  backgroundColor: "#722A8D",
  textTransform: "none",
  borderRadius: "5rem",
  borderColor: "#fff",
  marginRight: "1rem",
};
const pages = ["Mr Boku", "Boku flight", "Boku hotels", "Boku Tours"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={appMain}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            alt="usergif"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, ml: 8, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  ml: 2,
                  color: "white",
                  textTransform: "none",
                  display: "block",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link href="/login" variant="">
                <Controls.Button
                  sx={buttonStyles2}
                  variant="outlined"
                  size="large"
                  text="Sign in"
                />
              </Link>
              <Link href="/register" variant="">
                <Controls.Button
                  sx={buttonStyles}
                  variant="outlined"
                  size="large"
                  text="Sign up"
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
