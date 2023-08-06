import React from "react";
import { Link, NavLink } from "react-router-dom";
// import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "./../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";
import icon from "../../../Resources/Images/doctor-icon.png";

// MUI IMPORTS

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Home", "Services", "Blog", "About", "Login", "Signup "];
const pages = [
  {
    pageName: "Home",
    href: "/home",
  },
  {
    pageName: "Services",
    href: "/services",
  },
  {
    pageName: "Blog",
    href: "/blog",
  },
  {
    pageName: "About",
    href: "/about",
  },
];

const settings = [];

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  // MUI NAV METHODS
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const handleSignOut = () => {
    if (loading) {
      <Loading></Loading>;
    }
    signOut(auth);
  };

  return (
    <div>
      {/* <div className="nav-container">
        <div className="icon-container">
          <Link to="/home">
            <span className="title">The Doctor Lounge</span>
          </Link>
        </div>
        <div className="link-container">
          <Link to="/home">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>

          {user ? (
            <Link to={"/home"} onClick={handleSignOut}>
              Sign Out
            </Link>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div> */}

      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              DermaCare
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
                {pages.map((page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink
                        to={page.href}
                        onClick={handleSignOut}
                        className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        }
                        style={{
                          textDecoration: "none",
                          textTransform: "uppercase",
                          color: "blue",
                          textTransform: "capitalize",
                          display: "block",
                        }}
                      >
                        {page.pageName}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
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
              DermaCare
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, index) => (
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink
                    to={page.href}
                    onClick={handleSignOut}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    style={{
                      textDecoration: "none",
                      textTransform: "uppercase",
                      color: "white",
                      textTransform: "capitalize",
                      display: "block",
                    }}
                  >
                    {page.pageName}
                  </NavLink>
                </Button>
              ))}
              {user ? (
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 0, color: "white", display: "block" }}
                >
                  <Link to={"/home"} onClick={handleSignOut}>
                    Sign Out
                  </Link>
                </Button>
              ) : (
                <>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 0, color: "white", display: "block" }}
                  >
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}

                {user ? (
                  <MenuItem>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Typography textAlign="center">
                        <NavLink
                          to={"/home"}
                          onClick={handleSignOut}
                          className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                          }
                          style={{
                            textDecoration: "none",
                            textTransform: "uppercase",
                            color: "black",
                            display: "block",
                          }}
                        >
                          Sign Out
                        </NavLink>
                      </Typography>
                    </Button>
                  </MenuItem>
                ) : (
                  <MenuItem>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <Typography textAlign="center">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                      </Typography>
                    </Button>
                  </MenuItem>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>

    // <div>
    //   <AppBar position="static">
    //     <Container maxWidth="xl">
    //       <Toolbar disableGutters>
    //         <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
    //         <Typography
    //           variant="h6"
    //           noWrap
    //           component="a"
    //           href="/"
    //           sx={{
    //             mr: 2,
    //             display: { xs: "none", md: "flex" },
    //             fontFamily: "monospace",
    //             fontWeight: 700,
    //             letterSpacing: ".3rem",
    //             color: "inherit",
    //             textDecoration: "none",
    //           }}
    //         >
    //           LOGO
    //         </Typography>

    //         <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
    //           <IconButton
    //             size="large"
    //             aria-label="account of current user"
    //             aria-controls="menu-appbar"
    //             aria-haspopup="true"
    //             onClick={handleOpenNavMenu}
    //             color="inherit"
    //           >
    //             <MenuIcon />
    //           </IconButton>
    //           <Menu
    //             id="menu-appbar"
    //             anchorEl={anchorElNav}
    //             anchorOrigin={{
    //               vertical: "bottom",
    //               horizontal: "left",
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //               vertical: "top",
    //               horizontal: "left",
    //             }}
    //             open={Boolean(anchorElNav)}
    //             onClose={handleCloseNavMenu}
    //             sx={{
    //               display: { xs: "block", md: "none" },
    //             }}
    //           >
    //             {pages.map((page, index) => (
    //               <MenuItem key={index} onClick={handleCloseNavMenu}>
    //                 <Typography textAlign="center">
    //                   {/* <Link to={page.href}>{page.pageName}</Link> */}
    //                   {page.pageName}
    //                 </Typography>
    //               </MenuItem>
    //             ))}
    //           </Menu>
    //         </Box>
    //         <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
    //         <Typography
    //           variant="h5"
    //           noWrap
    //           component="a"
    //           href=""
    //           sx={{
    //             mr: 2,
    //             display: { xs: "flex", md: "none" },
    //             flexGrow: 1,
    //             fontFamily: "monospace",
    //             fontWeight: 700,
    //             letterSpacing: ".3rem",
    //             color: "inherit",
    //             textDecoration: "none",
    //           }}
    //         >
    //           DERMA CARE
    //         </Typography>
    //         <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
    //           {pages.map((page, index) => (
    //             <Button
    //               key={index}
    //               onClick={handleCloseNavMenu}
    //               sx={{ my: 2, color: "white", display: "block" }}
    //             >
    //               <Link  to={page.href}>{page.pageName}</Link>
    //             </Button>
    //           ))}
    //         </Box>

    //         <Box sx={{ flexGrow: 0 }}>
    //           <Tooltip title="Open settings">
    //             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //               <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
    //             </IconButton>
    //           </Tooltip>
    //           <Menu
    //             sx={{ mt: "45px" }}
    //             id="menu-appbar"
    //             anchorEl={anchorElUser}
    //             anchorOrigin={{
    //               vertical: "top",
    //               horizontal: "right",
    //             }}
    //             keepMounted
    //             transformOrigin={{
    //               vertical: "top",
    //               horizontal: "right",
    //             }}
    //             open={Boolean(anchorElUser)}
    //             onClose={handleCloseUserMenu}
    //           >
    //             {settings.map((setting) => (
    //               <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //                 <Typography textAlign="center">{setting}</Typography>
    //               </MenuItem>
    //             ))}
    //           </Menu>
    //         </Box>
    //       </Toolbar>
    //     </Container>
    //   </AppBar>
    // </div>
  );
};

export default Navbar;
