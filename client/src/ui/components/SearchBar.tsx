import { TRANSATION_DURATION } from "../../utils/constants";
import Button from "./Button";

function SearchBar({ onChange, value, onClick, searched = false }) {
  return (
    <div className="relative mx-2 my-6 h-5">
      <input
        className={`absolute left-4 top-1/2 -translate-y-1/2 focus:ring-0 duration-${TRANSATION_DURATION} w-64 rounded-2xl border-[1px] border-primary-darkest bg-primary px-4 py-1 transition-all focus:w-80 focus:border-primary-darkest focus:bg-primary-lighter focus:py-1.5`}
        type="text"
        onChange={onChange}
        value={value}
        placeholder="Search your own recipe..."
      />
      <Button
        className="absolute left-96 top-1/2 w-20 -translate-y-1/2 text-center"
        onClick={onClick}
      >
        {searched ? "Roll" : "Search"}
      </Button>
    </div>
  );
}

export default SearchBar;
