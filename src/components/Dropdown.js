// import Dropdown from 'react-dropdown';
// import Dropdown from 'react-bootstrap';
import * as React from "react"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import dropdown from "../styles/dropdown.css"
import { color } from "@mui/system"

const options = [
  "Members",
  "Founding",
  "Alpha",
  "Beta",
  "Gamma",
  "Delta",
  "Epsilon",
  "Zeta",
  "Eta",
  "Theta",
  "Iota",
  "Kappa",
  "Lambda",
  "Mu",
  "Nu",
  "Xi",
  "Omicron",
  "Pi",
  "Rho",
  "Sigma",
  "Tau",
]

export default function Dropdown({ setMember }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const open = Boolean(anchorEl)
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index)
    setMember(option)
    setAnchorEl(null)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <div class="dropdown">
        <List
          component="nav"
          aria-label="Device settings"
          // sx={{ bgcolor: 'background.paper' }}
          style={{
            bgcolor: "#880000",
          }}
        >
          <ListItem
            button
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label="Members"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
          >
            <ListItemText
              primary="Members"
              secondary={options[selectedIndex]}
              style={{}}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index, option)}
              style={{
                fontFamily: "Farro",
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </>
  )
}
