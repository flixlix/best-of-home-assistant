import { SupabaseClient } from "@supabase/supabase-js";
import parseLabelsStrToArr from "./parseLabelsStrToArr";

export default async function fetchDbProjects(category: string | string[], supabase: SupabaseClient) {
  const {
    data: projects,
    count,
    error,
  } = await supabase.from("home-assistant-list").select("*", { count: "exact" }).eq("category", category);

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    return {
      props: {
        fetchError: error.message || error,
      },
    };
  }
  const projectsWithParsedLabels = projects.map((project) => ({
    ...project,
    labels: parseLabelsStrToArr(project),
  }));
  return {
    props: {
      projects: projectsWithParsedLabels,
      count,
    },
  };
}
