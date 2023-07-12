import { SupabaseClient } from "@supabase/supabase-js";
import parseLabelsStrToArr from "./parseLabelsStrToArr";

export default async function fetchDbProjectRow(path: string | string[], supabase: SupabaseClient) {
  const { data: project, error } = await supabase.from("best-of-ha").select("*").eq("github_id", path).single();

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    return {
      props: {
        fetchError: error.message || error,
      },
    };
  }

  const projectWithParsedLabels = {
    ...project,
    labels: parseLabelsStrToArr(project),
  };
  return {
    props: { path, project: projectWithParsedLabels, error },
  };
}
