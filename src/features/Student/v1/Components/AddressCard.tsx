import { MapPin } from "lucide-react";
import Card from "./Card";
import SectionTitle from "./SectionTitle";

function AddressCard() {
  return (
    <Card>
      <SectionTitle icon={<MapPin size={16} />} title="Residential Address" />

      <p className="mt-4 text-zinc-300">
        H-42, Sector 15, Near Central Park, Ranchi, Jharkhand - 834001, India
      </p>
    </Card>
  );
}

export default AddressCard;
