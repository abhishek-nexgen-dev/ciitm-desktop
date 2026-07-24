import { Eye, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  student: {
    _id: string;
    uniqueId: string;
    isAdmitted: boolean;
    student: {
      firstName: string;
      lastName: string;
      avtar: string;
      dateOfBirth: string;
      email: string[];
      contactNumber: string;
    };
    fee: {
      amount_paid: number;
    };
  };
}

export function StudentRow({ student }: Props) {
  console.log(student);
  return (
    <tr className="border-b border-zinc-800 hover:bg-zinc-900 transition-colors">
      {/* Student ID */}
      <td className="px-5 py-5 text-blue-500 font-medium">{student.uniqueId}</td>

      {/* Student Details */}
      <td className="px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            <img src={student.student.avtar} className="rounded-full object-cover" />
          </div>

          <div>
            <p className="font-medium text-white">
              {student.student.firstName} {student.student.lastName}
            </p>

            <p className="text-sm text-zinc-500">{student.student.email.join(", ")}</p>
          </div>
        </div>
      </td>

      {/* Contact */}

      <td className="px-5 py-5">{student.student.dateOfBirth.slice(0, 10)}</td>

      <td className="px-5 py-5">{student.student.contactNumber}</td>

      <td className="px-5 py-5">{student.fee.amount_paid}</td>

      {/* Actions */}
      <td className="px-5 py-5">
        <div className="flex gap-3">
          <button className="rounded p-2 transition hover:bg-zinc-800">
            <Link to={`/student/${student.uniqueId}`}>
              <Eye size={18} />
            </Link>
          </button>

          <button className="rounded p-2 transition hover:bg-zinc-800">
            <Pencil size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}
