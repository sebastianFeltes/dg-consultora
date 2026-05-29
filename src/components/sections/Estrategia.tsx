import AreaSection from "./AreaSection";
import { AREAS } from "../../data/areas";

export default function Estrategia() {
  return <AreaSection config={AREAS.find((a) => a.id === "estrategia")!} />;
}
