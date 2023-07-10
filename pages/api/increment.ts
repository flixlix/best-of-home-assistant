import supabase from "@/utils/supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === "POST") {
    try {
      const { data, error } = await supabase.rpc("add_numbers", {
        a: 1,
        b: 2,
      });

      if (error) {
        console.error("Error:", error);
        res.status(500).json({ error });
      } else {
        const sum = data[0].add_numbers;
        console.log("Sum:", sum);
        res.status(200).json({ sum });
        return data;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    // Handle unsupported HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
