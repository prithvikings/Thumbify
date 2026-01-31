export interface Project {
  id: string;
  title: string;
  date: string;
  status: "Draft" | "Done" | "Processing" | "Failed";
  aspectRatio: string;
  prompt?: string;
  imageUrl?: string; // New field for the generated output
}
