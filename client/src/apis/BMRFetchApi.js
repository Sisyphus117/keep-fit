import { BMR_TOKEN } from "../utils/apiKeys";
import { BMR_BASR_URL } from "../utils/constants";

export async function BMRFetchApi({
  age = 18,
  gender = "Male",
  weight = 80,
  height = 180,
}) {
  // 1 for male, 2 for female
  const genderCode = gender === "Male" ? 1 : 2;
  const url = `${BMR_BASR_URL}token=${BMR_TOKEN}&age=${age}&gender=${genderCode}&weight=${weight}&height=${height}`;
  const response = await fetch(url);
  const data = await response.json();
  let { bmr } = data.data;
  bmr = Math.round(bmr);
  return bmr;
}
