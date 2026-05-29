import AreaSection from "./AreaSection";
import { AREAS } from "../../data/areas";

export default function Personas() {
  return <AreaSection config={AREAS.find((a) => a.id === "personas")!} />;
}
