import { EmptyObject, Plan } from ".";

export function isValidPlan(obj: Plan | EmptyObject): obj is Plan {
  if (!obj || typeof obj !== "object") return false;

  const plan = obj as Record<string, unknown>;
  return (
    typeof plan.item === "string" &&
    typeof plan.startDate === "string" &&
    (typeof plan.duration === "number" || typeof plan.duration === "string")
  );
}
