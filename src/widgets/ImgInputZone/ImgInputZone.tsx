import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useDropzone } from "react-dropzone";
import { ACCEPTED_IMG_TYPE } from "./constants";
import { ImgInputZoneProps } from "./type";

export const ImgInputZone: FC<ImgInputZoneProps> = ({ onSelectImg }) => {
    const { getRootProps, getInputProps, isFocused } = useDropzone({
        accept: ACCEPTED_IMG_TYPE,
        onDrop: onSelectImg,
        maxFiles: 1,
        multiple: false,
    });

    return (
        <Box
            {...getRootProps({ className: "dropzone" })}
            sx={{
                height: 600,
                width: 600,
                borderWidth: 2,
                borderColor: isFocused ? "green" : "black",
                borderStyle: "dashed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <input {...getInputProps()} />
            <Typography>
                Перетащите своё фото в эту область, или нажмите на неё.
            </Typography>
        </Box>
    );
};
