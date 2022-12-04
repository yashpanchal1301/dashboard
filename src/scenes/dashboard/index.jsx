import Header from "../../components/Header";
import { Box, Button, Typography, IconButton, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonIcon from "@mui/icons-material/Person";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import Progress from "../../components/Progress";
import StateBox from "../../components/StateBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px">
      <Box display="flex" justifyContent="space-between" alignItems="centre">
        <Header title="DASHBOARD" subtitle="Welcome To Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.green[800],
              color: colors.green[200],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Grid and Charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="110px"
        gap="15px"
      >
        {/* row1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[900]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StateBox
            title="23,694"
            subtitle="Email Sent"
            progress="0.7"
            increase="+14%"
            icon={
              <EmailIcon sx={{ color: colors.green[400], fontSize: "30px" }} />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[900]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StateBox
            title="53019"
            subtitle="Sales Obtained"
            progress="0.8"
            increase="+31%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.green[400], fontSize: "30px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[900]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StateBox
            title="3286"
            subtitle="New Clients"
            progress="0.3"
            increase="+11%"
            icon={
              <PersonIcon sx={{ color: colors.green[400], fontSize: "30px" }} />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[900]}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <StateBox
            title="62,084"
            subtitle="Traffic Inbound"
            progress="0.5"
            increase="+42%"
            icon={
              <TrafficIcon
                sx={{ color: colors.green[400], fontSize: "30px" }}
              />
            }
          />
        </Box>

        {/* row 2  */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[900]}
        >
          <Box
            mt="5px"
            p="0 10px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant="h4" color={colors.green[400]}>
                $59,732,48
              </Typography>
            </Box>

            <Box>
              <IconButton>
                <DownloadIcon
                  sx={{ fontSize: "26px", color: colors.green[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="310px" ml="-20px">
            <LineChart isDashboard={true} />
          </Box>
          </Box>

          {/* transactions */}
          <Box
            gridColumn=" span 4"
            gridRow="span 3"
            backgroundColor={colors.primary[900]}
            overflow="auto"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="5px"
            >
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight={600}
              >
                Recent Transactions
              </Typography>
            </Box>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                p="5px"
              >
                <Box>
                  <Typography
                    color={colors.green[500]}
                    variant="h5"
                    fontWeight={600}
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography
                    color={colors.green[100]}
                   
                  >
                    {transaction.user}
                  </Typography>
                </Box>

                <Box color={colors.red[500]}>
                {transaction.date}
                </Box>
                <Box backgroundColor={colors.green[500]} p="5px 5px" borderRadius="4px">
               ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      
    </Box>
  );
};

export default Dashboard;
