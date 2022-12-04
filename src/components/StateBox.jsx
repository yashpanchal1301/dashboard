import { useTheme, Box, Typography } from "@mui/material";
import { tokens } from "../theme";
import Progress from "./Progress";

const StateBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100px" m="0 5px">
      <Box display="flex" justifyContent="space-between" margin="0 5px">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            margin="5px"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
       
         

        <Box>
          <Progress progress={progress} />
        </Box>
        

        <Box display="flex" justifyContent="center" margin="0 10px">
          <Typography variant="h5" sx={{ color: colors.blue[500] }}>
            {subtitle}
          </Typography>
        </Box>
       
        
       
     

      <Box display="flex" justifyContent="centre">
        <Typography
          variant="h6"
          fontStyle="italic"
          sx={{ color: colors.red[500] }}
        >
          {increase}
        </Typography>
        </Box>
        </Box>
    </Box>
  );
};

export default StateBox;
