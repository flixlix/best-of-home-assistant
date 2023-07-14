import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { path } = req.query;

    if (!path) {
      return res.status(400).json({ error: "Missing path" });
    }

    const { data: project, error: fetchError } = await supabase
      .from("home-assistant-list")
      .select("*")
      .eq("github_id", path)
      .single();

    if (fetchError) {
      return res.status(500).json({ error: "Failed to fetch project" });
    }

    return res.status(200).json(project);
  } catch (error) {
    return res.status(500).json({ error: "An error occurred" });
  }
}
