import { useState } from "react";
import SummaryContainer from "../../ui/components/SummaryContainer";
import ToggleCollapse from "../../ui/components/ToggleCollapse";
import { isoToLocale } from "../../utils/dateConvert";
import RecordLine from "./RecordLine";

function RecordSummary({ summary }) {
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

      <div
        className={`transition-all duration-700 ease-in-out ${
          isOpen
            ? "max-h-[1000px] translate-y-0 opacity-100"
            : "hidden max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        {items.map((item) => (
          <RecordLine record={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default RecordSummary;
