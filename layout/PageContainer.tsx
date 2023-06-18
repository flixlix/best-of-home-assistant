import { Container, ContainerProps } from "@mui/material";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
}

export default function PageContainer({ children, maxWidth = "lg", ...props }: PageContainerProps & ContainerProps) {
  return (
    <Container maxWidth={maxWidth} {...props}>
      {children}
    </Container>
  );
}
