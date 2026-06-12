import { Eye, Pencil } from "lucide-react";
import { Student } from "../Types/student.types";
import { AttendanceProgress } from "./AttendanceProgress";
import { StudentStatusBadge } from "./ StudentStatusBadge";

interface Props {
  student: Student;
}

export function StudentRow({ student }: Props) {
  return (
    <tr className="border-b border-zinc-800 w-full">
      <td className="px-5 py-5 text-blue-500">{student.id}</td>

      <td className="px-5 py-5">
        <div className="flex items-center gap-3">
          <img src={student.avatar} className="h-10 w-10 rounded-full" />

          <div>
            <p>{student.name}</p>
            <p className="text-sm text-zinc-500">{student.email}</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-5">{student.course}</td>

      <td className="px-5 py-5">{student.semester}</td>

      <td className="px-5 py-5">
        <AttendanceProgress value={student.attendance} />
      </td>

      <td className="px-5 py-5">
        <StudentStatusBadge status={student.feeStatus} />
      </td>

      <td className="px-5 py-5">
        <div className="flex gap-3">
          <Eye size={18} />
          <Pencil size={18} />
        </div>
      </td>
    </tr>
  );
}
