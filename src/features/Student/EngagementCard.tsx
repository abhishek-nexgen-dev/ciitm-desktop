import { Activity } from "lucide-react";
import Card from "./v1/Components/Card";
import SectionTitle from "./v1/Components/SectionTitle";

function EngagementCard() {
  return (
    <Card>
      <SectionTitle icon={<Activity size={16} />} title="Engagement Index" />

      <div className="mt-6 flex h-40 items-end gap-3">
        {[50, 80, 100, 60, 85, 25, 10].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-blue-500/80"
            style={{
              height: `${h}%`,
            }}
          />
        ))}
      </div>

      <p className="mt-4 text-sm text-zinc-400">
        Activity engagement is <span className="text-blue-400">12% higher</span> than average.
      </p>
    </Card>
  );
}

export default EngagementCard;
