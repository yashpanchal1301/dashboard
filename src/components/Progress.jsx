import { useTheme, Box } from "@mui/material";
import { tokens } from "../theme";

const Progress =({ progress = "0.75", size = "65"}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const angle = progress * 360;

    return(
        <Box
        sx={{
            background: `radial-gradient(${colors.primary[900]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${angle}deg,
             ${colors.blue[500]} ${angle}deg 360deg),
             ${colors.green[500]}`,
             borderRadius: "50px",
             width: `${size}px`,
             height: `${size}px`,

             
        }}
        />
    )

}

export default Progress;