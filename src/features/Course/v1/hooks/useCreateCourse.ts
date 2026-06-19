import { useMutation } from "@tanstack/react-query";

import api from "../../../../Utils/api.utils";
import { CourseSchema } from "../Validations/CreateCourse.Validate";

export default function useCreateCourse() {
  return useMutation<CourseSchema, unknown, FormData>({
    mutationFn: async (formData) => {
      const response = await api.post(`/api/v1/admin/course/create`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    },
  });
}
