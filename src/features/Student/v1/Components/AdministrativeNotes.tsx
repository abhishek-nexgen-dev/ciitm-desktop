import { ClipboardList } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Note from "./Note";

function AdministrativeNotes() {
  return (
    <Card>
      <SectionTitle
        icon={<ClipboardList size={16} />}
        title="Administrative Notes"
      />

      <div className="mt-5 space-y-4">
        <Note
          title="Academic Probation Cleared"
          text="Successfully completed remedial math bridge course."
        />

        <Note
          title="Scholarship Status"
          text="Merit scholarship approved."
        />
      </div>
    </Card>
  );
}



export default AdministrativeNotes;