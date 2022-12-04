import { Box, useTheme } from "@mui/system";
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataTeam} from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from "../../components/Header";


const Team =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID"},
        {
            field: "name", headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age", headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone No.",
            flex: 1,

        },
        {
            field: "email",
            headerName: "Email",
            flex: 1

        },
        
    ]

return(
    <Box m ="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Box m="40px 0 0 0" height="75vh"
        sx={{
            "& .MuiDAtaGrid-root": {
                border: "none",
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none"
            },
            // "& .name-column--cell": {
            //     color: colors.green[400]
            // },
            "& .MuiDataGrid-columnHeaders" : {
                backgroundColor : colors.blue[700],
                borderBottom: "none"
            },
            // "& .MuiDataGrid-virtualScroller" : {
            //     backgroundColor: colors.primary[400]
            // },
            "& .MuiDataGrid-footerContainer" : {
                backgroundTop: "none",
                backgroundColor: colors.blue[700]
            }
        }}>
            <DataGrid rows={mockDataTeam}
            columns ={columns}

            />
        </Box>
    </Box>
);
    
};

export default Team;