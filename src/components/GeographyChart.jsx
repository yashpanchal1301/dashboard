import { tokens } from '../theme';
import { useTheme } from '@mui/system';
import { geoFeatures } from "../data/mockGeoFeatures";
import { mockGeographyData as data } from "../data/mockData";
import { ResponsiveChoropleth} from "@nivo/geo";


const GeographyChart = ({isDashboard}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
                domain: {
                    line: {
                        stroke: colors.grey[100]
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                },
                ticks: {
                    line: {
                        stroke: colors.grey[100],
                        strokeWidth: 1
                    },
                    text: {
                        fill: colors.grey[100]
                    }
                }
            },
            legends: {
                text:{
                    fill: colors.grey[100]
                    
                }
            }
        }}
        features= {geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[ 0, 1000000 ]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={isDashboard ? 40 : 150}
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
      
    />
    )
}

export default GeographyChart;