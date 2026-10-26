// Define a strict structural mold for individual Bootcamp modules
export interface Course {
  id: string;
  title: string;
  difficulty: string; // e.g., "Beginner", "Intermediate"
  duration: string; // e.g., "3 Hours"
  status: "Not Started" | "In Progress" | "Completed"; // Literal Union Type
}
