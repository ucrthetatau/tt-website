import React from 'react';
import '../styles/navbar.css'
import coatOfArms from '../static/coatOfArms.png'
import { NavLink } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <>
        // <div class="banner">
        //     <headerTitle > 
        //         <p> Theta Tau </p>
        //     </headerTitle>
        //     <headerSubtitle> 
        //         <p>
        //             SIGMA DELTA CHAPTER AT UC RIVERSIDE 
        //         </p>
        //         </headerSubtitle>
        // </div>
        // <div>
        //     <subtitle>
        //         <p> CO-ED PROFESSIONAL ENGINEERING FRATERNITY </p>
        //     </subtitle>
        // </div>
        // <div class="bar">
        //     <div class="half">
        //         <a href="/"> Home </a>
        //         <a href="About"> About </a>
        //         <a href="Rush"> Rush </a>
        //     </div>
        //     <div class="crest">
        //         <img src={coatOfArms} className="crestImage"/>
        //     </div>
        //     <div class="half">
        //         <NavLink href="Members"> Members </NavLink>
        //         <a href="Officers"> Officers </a>
        //         <a href="Contact"> Contact </a>
        //     </div>
        // </div>
//         </>
//     );
// };
// export default Navbar; 

const Navbar = () => (
    <>
    <div class="header">
        <div class="banner">
            <div class="title"> 
                <p>Theta Tau</p>
            </div>
            <div class="subtitle"> 
                <p>CO-ED PROFESSIONAL ENGINEERING FRATERNITY</p>
                <p>SIGMA DELTA CHAPTER AT UC RIVERSIDE</p>
            </div>
        </div>
        <div class="bar">
            <div class="half">
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    Home
                </NavLink>
                <NavLink
                    to="/About"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    About
                </NavLink>
                <NavLink
                    to="/Rush"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    Rush
                </NavLink>
            </div>
            <div class="crest">
                <img src={coatOfArms}/>
            </div>
            <div class="half">
                <NavLink
                    to="/Members"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    Members
                </NavLink>
                <NavLink
                    to="/Officers"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    Officers
                </NavLink>
                <NavLink
                    to="/Contact"
                    className={({isActive}) => isActive ? "active" : ""} > 
                    Contact
                </NavLink>
            </div>
        </div>
    </div>
    
    </>
  );
  
  export default Navbar;

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Rush', 'Members', 'Officers'];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);



//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };



//   return (
//     <AppBar position="static" 
//      sx={{
//         bgcolor: '#8d191c'
//      }}
    
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             UCR THETA TAU
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 href={page} 
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;
