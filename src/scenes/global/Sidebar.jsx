import { useState } from "react";
import {ProSidebar, Menu, MenuItem} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import {Link } from 'react-router-dom';
import { tokens } from "../../theme";
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import ThreePOutlinedIcon from '@mui/icons-material/ThreePOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import Diversity2OutlinedIcon from '@mui/icons-material/Diversity2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DonutLargeOutlinedIcon from '@mui/icons-material/DonutLargeOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';

const Item =({title, to, icon, selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active = {selected === title}
        style={{color: colors.grey[100]}}
        onClick={() => setSelected(title)}
        icon={icon}
        >
        <Typography>{title}</Typography>
        <Link to ={to} />

        </MenuItem>
    )
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return (
        <Box 
        sx={{
          
            "& .pro-sidebar-inner": {
                background:`${colors.primary[800]} !important`
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
               padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#3433fa !important"
            },
            "& .pro-menu-item.active": {
                color: "#3433fa !important"
            },
        }}
        >
        <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape = "square">

        {/* logo and menu icon */}
        <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
        style = {{
            margin: "10px 0px 20px 0px ",
            color: colors.grey[200],
        }}
        >
        {!isCollapsed && (
            <Box 
            display="flex"
            justifyContent="space-between"            
            alignItems="center"
            ml="2px"
            >
                <Typography variant="h3" color={colors.blue[100]}>ADMIN</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)} >
                <MenuOutlinedIcon />
                </IconButton>
            </Box>
        )}
        </MenuItem>
        {/* User  */}
        {!isCollapsed && (
        <Box mb="25px">

        <Box 
        display="flex" justifyContent="center" alignItems="center">
            <img 
                alt="user-profile"
                width="90px"
                height="90px"
                src={'../../assets/user.png.jpg'}
                style={{cursor: "pointer", borderRadius:"50%"}}
               
            />
        </Box>

        <Box textAlign="center">
            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold"
             sx={{m:"10px 0 0 0"}}>Yash Panchal</Typography>
            <Typography variant="h5" color={colors.red[500]}>Front-end Web Developer</Typography>
        </Box>

        </Box>
        )}
        {/* Menu items */}
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                 <Item
                 title="Dashboard"
                 to= "/"
                 icon={<CottageOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
         
                 <Item
                 title="Manage Team"
                 to="/team"
                 icon={< ThreePOutlinedIcon/>}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Conatcts Information "
                 to="/contacts"
                 icon={<ConnectWithoutContactOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Invoice"
                 to="/invoice"
                 icon={<ReceiptLongOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Profile Form"
                 to="/form"
                 icon={< Diversity2OutlinedIcon/>}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Calendar"
                 to="/calendar"
                 icon={<CalendarMonthOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="FAQ Page"
                 to="/faq"
                 icon={<QuizOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Bar Chart"
                 to="/bar"
                 icon={< BarChartOutlinedIcon/>}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Pie Chart"
                 to="/pie"
                 icon={<DonutLargeOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 <Item
                 title="Line Chart"
                 to="/line"
                 icon={<TimelineOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  />
                 {/* <Item
                 title="Geography Chart"
                 to="/geo"
                 icon={<AddLocationAltOutlinedIcon />}
                 selected={selected}
                 setSelected={setSelected}
                  /> */}
            </Box>
        </Menu>
        </ProSidebar>
        </Box>

    )
}

export default Sidebar;