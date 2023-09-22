import { AppBar, Avatar, Box, Button, Container, Grid, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import Logo from "../Logo outlet.jpg";
import MenuIcone from "@mui/icons-material/Menu"

function Header() {

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
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Grid container sx={{alignItems:'center'}}>
                <Grid item sx={{display: {lg:"none" , xs: "block"}}}>
                  <IconButton size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              >
                  <MenuIcone />
                  
                 
                  </IconButton>
                  <Menu
                  id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
                  >
                    <MenuItem>
                    <Button variant="contained" href="/dashboard" sx={{color: 'black'}}>Dashboard</Button>
                    </MenuItem>
                    <MenuItem>
                    <Button variant="contained" href="/dashboard/produtos" sx={{color: 'black'}}>Produtos</Button>
                    </MenuItem>
                  </Menu>
                </Grid>
                <Grid item lg={2} xs={6} md={1}>
                  <img src={Logo} width="100px" height="80px"/>
                </Grid>
                <Grid item lg={6} xs={6} md={10} sx={{display : {lg: "block" , xs: "none" , md: "block"}}}>
                  <Box>
                    <Button variant="contained" href="/dashboard" sx={{color: 'white'}}>Dashboard</Button>
                    <Button variant="contained" href="/dashboard/produtos" sx={{color: 'white'}}>Produtos</Button>
                  </Box>
                </Grid>
                <Grid item lg={2} xs={4} md={1}>
                  <Tooltip title="Account settings">
                    <IconButton onClick={handleOpenUserMenu}>
                      <Avatar alt="Baza" src=""/>
                    </IconButton>
                  </Tooltip>
                  <Menu sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Perfil</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center">Configurações</Typography>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Header;