import { Project } from "@/types/Project";

export default function parseLabelsStrToArr(
  project:
    | Project
    | {
        labels: string;
      }
): string[] {
  if (project.labels === "" || typeof project.labels !== "string") return [];
  const labelsString = project.labels;
  const labelsRegex = /'([^']+)'/g;
  const labelsArray = labelsString.match(labelsRegex)?.map((label) => label.replace(/'/g, ""));
  return labelsArray || [];
}
