import AreaSection from "./AreaSection";
import { AREAS } from "../../data/areas";

export default function Procesos() {
  return <AreaSection config={AREAS.find((a) => a.id === "procesos")!} />;
}
