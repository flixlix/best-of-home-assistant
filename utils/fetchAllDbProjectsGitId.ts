import { SupabaseClient } from "@supabase/supabase-js";
import parseLabelsStrToArr from "./parseLabelsStrToArr";

export default async function fetchAllDbProjects(supabase: SupabaseClient) {
  const { data, error } = await supabase.from("home-assistant-list").select("*");

  // log all projects that contain "mushroom" in their github_id
  const projectsGithubIds = data?.map((project) => `/blog/${project.github_id}`);

  if (error) {
    console.error("Error fetching data from Supabase:", error);
  }
  return {
    paths: projectsGithubIds || [],
    fallback: false,
  };
}
