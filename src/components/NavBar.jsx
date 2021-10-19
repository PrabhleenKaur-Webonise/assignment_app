import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        <AppBar>
            <Toolbar>
                {/* <NavLink to = ""><b>ALL USERS  </b></NavLink> */}
                <NavLink exact to = "/dashboard/allUser"><b>  ALL USERS</b></NavLink>
                <NavLink exact to = "/dashboard/addUser"><b>  ADD USERS</b></NavLink>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default NavBar;