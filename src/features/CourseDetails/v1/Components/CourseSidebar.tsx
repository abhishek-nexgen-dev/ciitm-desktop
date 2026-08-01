import {
  Download,
  Clock3,
  IndianRupee,
  Users,
  MapPin,
  Phone,
  Mail,
  GraduationCap,
} from "lucide-react";

import Card from "./Card";

export default function CourseSidebar() {
  return (
    <aside className="sticky top-6 space-y-6">
      {/* Apply Card */}

      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6">
          <h2 className="text-xl font-bold text-white">Admissions Open</h2>

          <p className="mt-2 text-sm text-violet-100">
            Secure your seat for the upcoming academic session.
          </p>
        </div>

        <div className="space-y-4 p-6">
          <button
            className="
            w-full
            rounded-xl
            bg-violet-600
            px-5
            py-3
            font-semibold
            text-white
            transition
            hover:bg-violet-700
          "
          >
            Apply Now
          </button>

          <button
            className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-zinc-700
            bg-zinc-900
            px-5
            py-3
            text-zinc-200
            transition
            hover:bg-zinc-800
          "
          >
            <Download size={18} />
            Download Brochure
          </button>
        </div>
      </Card>

      {/* Quick Information */}

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-white">Quick Information</h3>

        <div className="mt-6 space-y-5">
          <InfoRow icon={<IndianRupee size={18} />} title="Course Fee" value="₹95,000 / Year" />

          <InfoRow icon={<Clock3 size={18} />} title="Duration" value="2 Years" />

          <InfoRow icon={<GraduationCap size={18} />} title="Degree" value="Master of Science" />

          <InfoRow icon={<Users size={18} />} title="Seats" value="120 Students" />
        </div>
      </Card>

      {/* Coordinator */}

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-white">Course Coordinator</h3>

        <div className="mt-6 flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/150?img=13"
            className="h-16 w-16 rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-white">Dr. Amit Sharma</h4>

            <p className="text-sm text-zinc-400">Professor & Program Head</p>
          </div>
        </div>
      </Card>

      {/* Contact */}

      <Card className="p-6">
        <h3 className="text-lg font-semibold text-white">Contact</h3>

        <div className="mt-6 space-y-5">
          <InfoRow icon={<Phone size={18} />} title="Phone" value="+91 98765 43210" />

          <InfoRow icon={<Mail size={18} />} title="Email" value="admissions@college.edu" />

          <InfoRow icon={<MapPin size={18} />} title="Campus" value="Ranchi, Jharkhand" />
        </div>
      </Card>
    </aside>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function InfoRow({ icon, title, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-lg bg-violet-600/20 p-2 text-violet-400">{icon}</div>

      <div>
        <p className="text-sm text-zinc-500">{title}</p>

        <h4 className="mt-1 font-medium text-white">{value}</h4>
      </div>
    </div>
  );
}
