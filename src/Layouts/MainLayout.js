import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import { useHistory } from "react-router";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { storeContext } from "../contexts/StoreContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";
import fontClasses from "./mainLayout.module.css";
import HeroIcon from "../assets/images/-.svg";
import GradeIcon from "@material-ui/icons/Grade";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundImage:
      "linear-gradient( 65.9deg,  rgba(85,228,224,1) 5.5%, rgba(75,68,224,0.74) 54.2%, rgba(64,198,238,1) 55.2%, rgba(177,36,224,1) 98.4% )",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#E4EFE7",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    minHeight: "100vh",
    position: "relative",
  },
  addBtn: {
    position: "fixed",
    top: "50%",
    right: 15,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navContent: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  brandLogo: {
    width: 56,

    objectFit: "contain",
  },
}));

export default function MainLayout(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { fetchBrands, brands, users } = useContext(storeContext);
  useEffect(() => {
    fetchBrands();
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/">
            <img
              src={HeroIcon}
              alt="heroIcon"
              className={fontClasses.heroIcon}
            />
          </NavLink>

          <div className={classes.navContent}>
            <NavLink
              className={classes.logo}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/"
            >
              <Typography variant="h6" noWrap className={fontClasses.logoName}>
                Avia Store
              </Typography>
            </NavLink>

            <SearchBar />
          </div>
          <Link to="/account">
            <IconButton
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              style={{ color: "#fff" }}
            >
              <AccountCircle />
            </IconButton>
          </Link>
          <Link to="/favorite">
            <IconButton style={{ color: "#fff" }}>
              <GradeIcon />
            </IconButton>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          {brands.map((brand) => (
            <Link
              style={{
                textDecoration: "none",
                color: "#005a8d",
              }}
              to={`/brand/${brand.id}`}
            >
              <ListItem button key={brand.id}>
                <ListItemText
                  style={{ fontWeight: "bold" }}
                  primary={brand.title}
                />
                <ListItemIcon>
                  <img
                    className={classes.brandLogo}
                    src={brand.logo}
                    alt={`${brand.title} logo`}
                  />
                </ListItemIcon>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div style={{ height: 64 }}>
          {users.length !== 0 ? (
            <Fab
              onClick={() => history.push("/products/create")}
              style={{ position: "fixed", top: "50%", right: 15 }}
              color="primary"
              aria-label="add"
            >
              <AddIcon />
            </Fab>
          ) : null}
        </div>
        {props.children}
      </main>
    </div>
  );
}
