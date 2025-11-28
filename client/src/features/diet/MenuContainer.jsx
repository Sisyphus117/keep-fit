import { useState } from "react";
import Button from "../../ui/components/Button";
import { menuItemsFetchApi } from "../../apis/menuItemsFetchApi";
import { useSelector } from "react-redux";
import { inSameDate } from "../../utils/DateConvert";
import { CALORIES_RANGE } from "../../utils/constants";
import toast from "react-hot-toast";
import MenuItem from "./MenuItem";

function MenuContainer() {
  const query = "snickers";

  const [menuItems, setMenuItems] = useState([]);
  const { bmr } = useSelector((store) => store.user);
  const { records } = useSelector((store) => store.records);
  const today = new Date();
  const todaySpend = records
    .filter((record) => inSameDate(record.date, today))
    .reduce((sum, record) => sum + record.calories, 0);
  const total = (bmr + todaySpend) / 3;
  async function searchMenu() {
    try {
      const { menuItems: newMenuItems } = await menuItemsFetchApi({
        query,
        minCalories: total - CALORIES_RANGE,
        maxCalories: total + CALORIES_RANGE,
      });
      if (!newMenuItems) {
        throw new Error("No result found, please try something else");
      }
      console.log(newMenuItems);
      setMenuItems(newMenuItems);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }
  return (
    <div>
      <Button onClick={searchMenu}>Menu</Button>
      <div className="flex flex-col gap-2 px-4 py-3">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default MenuContainer;
