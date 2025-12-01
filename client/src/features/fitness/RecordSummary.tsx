import { useState } from "react";
import SummaryContainer from "../../ui/components/SummaryContainer";
import ToggleCollapse from "../../ui/components/ToggleCollapse";
import { isoToLocale } from "../../utils/dateConvert";
import RecordLine from "./RecordLine";
import AnimatedContainer from "../../ui/components/AnimatedContainer";
import { Summary } from "@/types/record";

interface RecordSummaryProps {
  summary: Summary;
}

function RecordSummary({ summary }: RecordSummaryProps) {
  const { items, date, calories, duration } = summary;
  const [isOpen, setIsOpen] = useState(false);
  function handleCollapse() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="min-w-[500px]">
      <SummaryContainer>
        <ul className="flex items-center gap-4">
          <li className="w-24">{isoToLocale(date)}</li>
          <li className="w-28">{duration} min in total</li>
          <li className="w-28 whitespace-nowrap">
            {calories} calories in total
          </li>
        </ul>
        <ToggleCollapse onToggle={handleCollapse} isOpen={isOpen} />
      </SummaryContainer>

      <AnimatedContainer isOpen={isOpen}>
        {items.map((item) => (
          <RecordLine record={item} key={item.id} />
        ))}
      </AnimatedContainer>
    </div>
  );
}

export default RecordSummary;
