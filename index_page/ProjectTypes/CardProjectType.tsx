import CustomCardBase from "@/components/CustomCard/CustomCardBase";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface CardProjectTypeProps {
  title?: string;
  description?: string;
  href?: string;
  icon?: React.ReactNode;
}

export default function CardProjectType({
  title = "Title",
  description = "Description",
  href = "/",
  icon,
}: CardProjectTypeProps) {
  return (
    <CustomCardBase href={href}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant="h5" component={"h2"}>
          {title}
        </Typography>
        <Box color={"grey.500"}>{icon}</Box>
      </Stack>
      <Typography
        variant="body2"
        color={"grey.800"}
        sx={{
          textWrap: "balance",
          maxInlineSize: "35ch",
        }}
      >
        {description}
      </Typography>
    </CustomCardBase>
  );
}
