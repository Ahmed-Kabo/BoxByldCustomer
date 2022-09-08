import {
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";

import { useState } from "react";
import {
  Approval,
  ArtTrack,
  Assessment,
  AttachFile,
  Autorenew,
  BlindsClosed,
  ChevronLeft,
  ChevronRight,
  CloudUpload,
  DocumentScanner,
  DonutSmall,
  HomeMax,
  House,
  ImportContacts,
  Inbox,
  Mail,
  Menu,
} from "@mui/icons-material";
import { NavLink, Outlet } from "react-router-dom";

import LOGO from "../../Assets/logo.svg";
import { ImageController } from "../../Helper/Helper";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  borderRight: "0px",
  background: "#191919",
  color: "#878787",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  borderRight: "0px",
  overflowX: "hidden",
  background: "#191919",
  color: "#878787",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  border: "none",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// add the routs name

const Routs = [
  { id: 1, name: "Site Survey", route: "site-survey", icon: <CloudUpload /> },
  {
    id: 2,
    name: "Utility Bill",
    route: "utility-bill",
    icon: <Approval />,
  },
  { id: 3, name: "Solution", route: "solution", icon: <Assessment /> },
  { id: 4, name: "Contract", route: "contract", icon: <AttachFile /> },
  {
    id: 5,
    name: "Project Status",
    route: "project-status",
    icon: <DonutSmall />,
  },
  {
    id: 6,
    name: "conatct Officer ",
    route: "contact-officer",
    icon: <House />,
  },
  { id: 7, name: "Tracking ", route: "tracking", icon: <ArtTrack /> },
];

const Home = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ background: "#191919" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Menu />
          </IconButton>
          <Box>
            <h2>Customer Dashbord</h2>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          display: "block",
        }}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderRight: "0px",
          }}
        >
          <ImageController src={LOGO} w="150px" />
          <IconButton onClick={handleDrawerClose} sx={{ color: "#878787" }}>
            {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </DrawerHeader>

        <List>
          {Routs.map((route) => (
            <ListItem key={route.id} disablePadding sx={{ display: "block" }}>
              <NavLink to={`${route.route}`}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    textTransform: "uppercase",
                    margin: "1rem 0",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      color: "#878787",
                      justifyContent: "center",
                    }}
                  >
                    {route.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={route.name}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
