import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { ColorsFonts } from "../../css/fonts/Color";

export const NavBarResponsive = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        sx={{ boxShadow: "none", backgroundColor: ColorsFonts.background }}
        enableColorOnDark={true}
        position="static"
      >
        <Toolbar>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="warning"
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton> */}
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Inicio</MenuItem>
            <MenuItem onClick={handleClose}>Meu perfil</MenuItem>
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
          <Typography
            variant="h6"
            color="white"
            sx={{ flexGrow: 1 }}
            component="div"
          >
            Venda de produtos
          </Typography>
          <Button sx={{ color: ColorsFonts.pureWhite }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
