import { SupabaseClient } from "@supabase/supabase-js";
import parseLabelsStrToArr from "./parseLabelsStrToArr";

export default async function fetchAllDbProjects(supabase: SupabaseClient) {
  const { data, error } = await supabase.from("best-of-ha").select("*");

  // log all projects that contain "mushroom" in their github_id
  const mushroomProjects = data?.filter((project) => project.github_id.includes("mushroom"));
  const mushroomProjectsGithubIds = mushroomProjects?.map((project) => `/blog/${project.github_id}`);
  console.log(mushroomProjectsGithubIds);

  if (error) {
    console.error("Error fetching data from Supabase:", error);
  }
  return {
    paths: mushroomProjectsGithubIds || [],
    fallback: false,
  };
}
