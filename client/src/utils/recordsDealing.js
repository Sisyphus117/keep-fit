// calories: 270;
// date: "2024-01-25";
// duration: 55;
// id: 38;
// item: "Yoga";
// user_id: 1;
export function integrateRecords(records) {
  const integrated = [];
  for (const record of records) {
    const { id, user_id, date, item, duration, calories } = record;
    const integratedItem = integrated.find((item) => item.date === record.date);
    if (integratedItem) {
      integratedItem.items.push({ id, item, duration, calories });
      integratedItem.duration += duration;
      integratedItem.calories += calories;
    } else {
      const newItem = {
        user_id,
        date,
        duration,
        calories,
        items: [
          {
            id,
            item,
            duration,
            calories,
          },
        ],
      };
      integrated.push(newItem);
    }
  }
  return integrated;
}

export function simpleIntegrateRecords(records) {
  const integrated = [];
  for (const record of records) {
    const { user_id, date, duration, calories } = record;
    const integratedItem = integrated.find((item) => item.date === record.date);
    if (integratedItem) {
      integratedItem.duration += duration;
      integratedItem.calories += calories;
    } else {
      const newItem = {
        user_id,
        date,
        duration,
        calories,
      };
      integrated.push(newItem);
    }
  }
  return integrated;
}
