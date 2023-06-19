import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import React from "react";

interface CardProjectTypeProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export default function CardProjectType({ title = "Title", description = "Description", icon }: CardProjectTypeProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        transition: "all 0.2s ease-in-out",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",

      }}
    >
      <CardActionArea>
        <Stack height={105} p={3} gap={2} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant="h5">{title}</Typography>
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
        </Stack>
      </CardActionArea>
    </Card>
  );
}
