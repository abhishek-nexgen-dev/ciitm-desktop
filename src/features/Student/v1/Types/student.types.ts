export interface Student {
  id: string;
  name: string;
  email: string;
  avatar: string;
  course: string;
  department: string;
  semester: string;
  attendance: number;
  feeStatus: "Paid" | "Partial" | "Overdue";
}
