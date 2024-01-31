import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

export const mainListItems = (
  <div>
    <Link className="mobile-links" to={"/dashboard/admin"}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link className="mobile-links" to={"/dashboard/admin/users"}>
      <ListItemButton>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </Link>

    <Link className="mobile-links" to={"/login"}>
      <ListItemButton>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </Link>
    <Link className="mobile-links" to={"/"}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>
  </div>
);
