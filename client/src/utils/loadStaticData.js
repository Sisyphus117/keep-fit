const recordsData = [
  {
    id: "2025-12-23T07:42:02.383Z",
    item: "jogging",
    duration: 25,
    calories: 120,
    time: "2025-12-23T07:42:02.383Z",
  },
  {
    id: "2025-11-15T21:31:17.178Z",
    item: "swim",
    duration: 30,
    calories: 200,
    time: "2025-11-15T21:31:17.178Z",
  },

  {
    id: "2027-05-27T17:01:17.194Z",
    item: "cycling",
    duration: 47,
    calories: 345,
    time: "2027-05-27T17:01:17.194Z",
  },
];
const userData = {
  name: "sisyphus",
  gender: "Male",
  age: 18,
  height: 169,
  weight: 67,
};

/**
 * local data for test (OUT OF DATE)
 * @returns recordsData and userData
 */
export const loadStaticData = function () {
  return { recordsData, userData };
};
