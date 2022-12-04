import { Box, IconButton, IconButtons, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Topbar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
        <Box
        display="flex"
        backgroundColor={colors.primary[900]}
        borderRadius="3px"
         >
           <InputBase sx={{ml:2, flex:1}} placeholder="Search" />
            <IconButton type="button" sx={{p:1 }}>
                <SearchOutlinedIcon />
            </IconButton>
         </Box>
         {/* Icons */}
         <Box display="flex">

         <IconButton onClick={colorMode.toggleColorMode}>
         {theme.palette.mode ==="dark" ? (
            <DarkModeOutlinedIcon />):(
                <LightModeOutlinedIcon />
                )
         }
         
         </IconButton>

         <IconButton>
         <NotificationsActiveOutlinedIcon />
         </IconButton>

         <IconButton>
         <SettingsSuggestOutlinedIcon />
         </IconButton>

         <IconButton>
         <PersonOutlineOutlinedIcon />
         </IconButton>

         </Box>


        </Box>
    )
}

export default Topbar;