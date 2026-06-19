import z from "zod";

export const CreateCourseValidation = z.object({
  courseName: z.string().min(1, "Course name is required"),
  courseCode: z.string().min(1, "Course code is required"),
  courseDescription: z.string().min(1, "Course description is required"),
  courseDuration: z.string().min(1, "Course duration is required"),
  courseEligibility: z.string().min(1, "Course eligibility is required"),
  coursePrice: z.coerce.number().min(0),
  courseImage: z.instanceof(File).optional(),
  Department: z.string().min(1),
  AdmissionCriteria: z.array(z.string()).min(1),
});

export type CourseSchema = z.infer<typeof CreateCourseValidation>;
