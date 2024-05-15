import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { ProcessImgViewerProps } from "./type";

export const ProcessImgViewer: FC<ProcessImgViewerProps> = ({
    src,
    actions,
}) => {
    return (
        <Box width={600} height={600}>
            <img
                width={600}
                height={600}
                style={{
                    objectPosition: "center",
                    objectFit: "contain",
                }}
                src={src}
            />
            <Grid container gap={1} justifyContent={"center"}>
                {actions}
            </Grid>
        </Box>
    );
};
