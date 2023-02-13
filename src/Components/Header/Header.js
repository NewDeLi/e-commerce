import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context Api/AuthContext";
import "./Header.scss";
import { useCartStore } from "../../Context Api/ShoppingCard/CartContext";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Menu } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Tooltip } from "@mui/material";
import { MenuItem } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export default function Header() {
  const { currentUser, logout } = useContext(AuthContext);
  const { state, actions } = useCartStore();

  const pages = [
    { name: "Home", link: "/" },
    { name: "Search", link: "/search" },
    { name: `Shopping Cart (${state.totalQuantity})`, link: "/cart" },
  ];

  const settings = !currentUser
    ? [
        { name: "Register", link: "/register" },
        { name: "Login", link: "/login" },
      ]
    : [
        { name: "Account", link: "/myAccount" },
        { name: "Logout", link: "/" },
      ];

  useEffect(() => {
    actions.getTotal(state.cart);
  }, [state.cart]);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ backgroundColor: "white", color: "#1976d2" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ShoppingCart sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 800,
              fontSize: "1.5rem",
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Online Shop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <i className="fa fa-bars"></i>
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
              {pages.map(({ name, link }, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <NavLink to={link} exact="true" activeclassname="active">
                    <Typography textAlign="center">{name}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ShoppingCart sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Online Shop
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map(({ name, link }, index) => (
              <Button
                key={index}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Typography>
                  <NavLink to={link} exact="true" activeclassname="active">
                    {name}
                  </NavLink>
                </Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, border: "1px solid  rgb(25,118,210)" }}
              >
                <Avatar alt="avatar" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(({ name, link }, index) => (
                <MenuItem key={index} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    {name === "Logout" ? (
                      <NavLink
                        to={link}
                        activeclassname="active"
                        onClick={() => logout()}
                      >
                        {name}
                      </NavLink>
                    ) : (
                      <NavLink to={link} activeclassname="active">
                        {name}
                      </NavLink>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
