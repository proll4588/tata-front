import { Grid, Box } from "@mui/material";
import { FC, useState } from "react";
import { ImgsViewerProps } from "./type";

export const ImgsViewer: FC<ImgsViewerProps> = ({ images, actions }) => {
    const [indexSelected, setIndexSelected] = useState(0);

    return (
        <Grid container flexDirection={"column"} alignItems={"center"} gap={2}>
            <Grid
                container
                flexDirection={"row"}
                flexWrap={"nowrap"}
                gap={1}
                sx={{
                    width: "100%",
                    height: 600,
                }}
            >
                <Box
                    flex={"80%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <img
                        style={{
                            objectPosition: "center",
                            objectFit: "contain",
                        }}
                        width={"100%"}
                        height={"100%"}
                        src={images[indexSelected]}
                    />
                </Box>

                <Grid
                    container
                    height={"100%"}
                    flexDirection={"column"}
                    gap={1}
                    flexWrap={"nowrap"}
                    flex={"100px"}
                    overflow={"scroll"}
                >
                    {images.map((image, i) => (
                        <Box
                            key={i}
                            sx={{
                                borderRadius: 2,
                                width: "100%",
                                height: 100,
                                overflow: "hidden",
                                flexShrink: 0,
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                setIndexSelected(i);
                            }}
                        >
                            <img
                                style={{ objectFit: "contain" }}
                                width={"100%"}
                                height={"100%"}
                                src={image}
                            />
                        </Box>
                    ))}
                </Grid>
            </Grid>
            {actions}
        </Grid>
    );
};
