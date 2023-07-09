import { Project } from "@/types/Project";
import { Typography } from "@mui/material";
import CustomCardBase from "./CustomCardBase";
import Badges from "./Badges/Badges";

interface CustomCardProjectProps {
  project: Project;
}

export default function CustomCardProject({ project }: CustomCardProjectProps) {
  const nameCharacterLimit = 25;
  const name =
    project.name.replace("integration", "").length > nameCharacterLimit
      ? project.name.replace("integration", "").substring(0, nameCharacterLimit) + "..."
      : project.name.replace("integration", "");
  return (
    <CustomCardBase href={project.github_url} openNewTab height={130} topChildren={<Badges project={project} />}>
      <Typography
        variant="h5"
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        color={"grey.800"}
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {project.description}
      </Typography>
    </CustomCardBase>
  );
}
