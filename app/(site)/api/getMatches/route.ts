// /pages/api/getMatches.js
import { db } from "@/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(req: any, res: any) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { caste, email } = req.query;

    if (!caste) {
      return res.status(400).json({ message: "Missing caste" });
    }

    const matchesQuery = query(
      collection(db, "users"),
      where("caste", "==", caste)
    );
    const querySnapshot = await getDocs(matchesQuery);

    const matches = querySnapshot.docs
      .filter((doc) => doc.data().email !== email) // Exclude the user's own profile
      .map((doc) => doc.data());

    res.status(200).json({ matches });
  } catch (error) {
    console.error("Error fetching matches:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
