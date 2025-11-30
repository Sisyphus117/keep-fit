import { inSameDate, isAfter } from "../../utils/dateConvert";
import { validValueFilter } from "../../utils/filters";

// Tests for filters
test("validValueFilter", () => {
  expect(validValueFilter({ a: 1, b: null, c: "test", d: null })).toEqual({
    a: 1,
    c: "test",
  });
});

test("validValueFilter with all null values", () => {
  expect(validValueFilter({ a: null, b: null })).toEqual({});
});

//Test for dateConvert
test("inSameDate", () => {
  expect(inSameDate("2023-10-01T10:00:00Z", "2023-10-01T15:00:00Z")).toBe(true);
  expect(inSameDate("2023-10-01", "2023-10-02")).toBe(false);
  expect(inSameDate(new Date("2023-10-01"), new Date("2023-10-01"))).toBe(true);
});

test("isAfter", () => {
  expect(isAfter("2023-10-02", "2023-10-01")).toBe(true);
  expect(isAfter("2023-10-01", "2023-10-02")).toBe(false);
  expect(isAfter("2023-10-01", "2023-10-01")).toBe(true);
});
