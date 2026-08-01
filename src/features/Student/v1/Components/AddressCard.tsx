import { MapPin } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import useStudentStore from "../../../Course/v1/store/student.store";

function AddressCard() {
  const student = useStudentStore((state) => state.students[0]);

  if (!student) {
    return <div>Loading...</div>;
  }

  const { street, city, state, pinCode } = student.address ?? {};

  return (
    <Card>
      <SectionTitle icon={<MapPin size={16} />} title="Residential Address" />

      <div className="mt-5 space-y-4">
        <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-4">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-500">Street</span>
              <span>{street}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">City</span>
              <span>{city}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">State</span>
              <span>{state}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-zinc-500">PIN Code</span>
              <span>{pinCode}</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-zinc-100 dark:bg-zinc-900 p-4 text-sm text-zinc-600 dark:text-zinc-400">
          {street}, {city}, {state} - {pinCode}, India
        </div>
      </div>
    </Card>
  );
}

export default AddressCard;
