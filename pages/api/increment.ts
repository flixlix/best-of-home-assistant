import { NextApiRequest, NextApiResponse } from "next";
import supabase from "@/utils/supabase";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page_name } = req.body;

  try {
    const { error } = await supabase.rpc("increment_page_view", { page_name });
    if (!error) {
      res.status(200).json({ message: "Page view incremented successfully" });
    } else {
      console.error("Failed to increment page view:", error);
      res.status(500).json({ message: "An error occurred while incrementing page view" });
    }
  } catch (error) {
    console.error("An error occurred while calling the function:", error);
    res.status(500).json({ message: "An error occurred while calling the function" });
  }
}
