import { Container, ContainerProps } from "@mui/material";
import { FC } from "react";

export const AppContainer: FC<ContainerProps> = (props) => {
    return <Container maxWidth="xl" {...props} />;
};
