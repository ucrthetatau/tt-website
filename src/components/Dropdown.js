import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import setMember from './Members'; 
import { makeStyles } from "@material-ui/core/styles"; 


const options = [
  'Members',
  'founding', 
   'alpha',
  'beta', 
  'gamma', 
  'delta', 
  'epsilon', 
  'zeta', 
  'eta', 
  'theta', 
  'iota', 
  'kappa', 
   'lambda', 
   'mu', 
   'nu', 
   'xi', 
   'omicron', 
   'pi', 
   'rho', 
   'sigma'
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));




export default function Dropdown({setMember}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  
   
  };
  const classes = useStyles(); 

  const handleMenuItemClick = (event, index, option) => {
    setSelectedIndex(index);
    setMember(option); 
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="Members"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Members"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index, option)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}