import { Box } from "@mui/system";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";



const Geography = () => {
    return(
        <Box m="20px">
        <Header title="GEO CHART" subtitle="Simple Geography Chart" />

        <Box height="75vh">

     <GeographyChart />
        </Box>

        </Box>
    )
}

export default Geography;