import { BusinessList } from "../components/BusinessList";
import { IoIosAddCircle } from "react-icons/io";

export default async function BusinessesPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold text-slate-800 pt-8 pb-4">
        Business Manager
      </h1>
      <button className="text-3xl text-slate-800 pb-4">
        <IoIosAddCircle />
      </button>
      <BusinessList />
    </div>
  );
}
