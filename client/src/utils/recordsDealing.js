/**
 * integrate records by date, for easily getting one day's records,
 * single rocords are stored in items field
 * @param {Record[]} records single records collected form backend
 * @returns
 */
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

/**
 * integrate records by date, for the case we only interested in integrated data,
 * no single record data left after filtering
 * @param {Record[]} records single records collected form backend
 * @returns
 */
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
