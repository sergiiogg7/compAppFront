import * as React from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function DropDownMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleTournaments = () => {
    router.replace("/tournaments");
  };
  const handleOwnedTournaments = () => {
    router.replace("/mytournaments");
  };
  return (
    <div>
      <div id="basic-button" onClick={handleClick} className="cursor-pointer">
        <img
          className="h-8 w-8 rounded-full mr-2"
          src="https://ui-avatars.com/api?name=Sergio+Garcia"
          alt="Sergio Garcia"
        />
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={handleTournaments}
          className="text-gray-900 text-sm font-medium"
        >
          Tournaments
        </MenuItem>
        <MenuItem
          onClick={handleOwnedTournaments}
          className="text-gray-900 text-sm font-medium"
        >
          My Tournaments
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="text-gray-900 text-sm font-medium"
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          className="text-gray-900 text-sm font-medium"
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}
