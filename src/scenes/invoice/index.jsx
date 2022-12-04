import { Box, useTheme } from "@mui/system";
import {DataGrid} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";
import { Typography } from "@mui/material";



const Invoice =() => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", },
      
        {
            field: "name", headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell"
        },
       
        {
            field: "phone",
            headerName: "Phone No.",
            flex: 1,

        },
       
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color ={colors.green[600]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1

        },
       
        
    ]

return(
    <Box m ="20px">
        <Header title="INVOICES" subtitle="List Of Invoice Balances" />
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
            },
            "& .MuiCheckbox-root" : {
                color: `${colors.green[200]} !important`
            }
           
        }}>
            <DataGrid
            checkboxSelection
            rows={mockDataInvoices}
            columns ={columns}

            />
        </Box>
    </Box>
);
    
};

export default Invoice;