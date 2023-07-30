import SeniorEducation from "./education";
import SeniorJob from "./jobs";

export default function HomeSenior() {
  return (
    <div className="w-full h-full flex flex-col gap-12 shrink">
      <SeniorJob />
      <SeniorEducation />
    </div>
  );
}
