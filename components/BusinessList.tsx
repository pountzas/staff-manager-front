import Link from "next/link";
import { MdDelete } from "react-icons/md";
import { DeleteButton } from "./DeleteButton";
import { FaRegCircle } from "react-icons/fa";

export async function BusinessList() {
  const res = await fetch("http://localhost:3001/api/businesses");
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const businesses: Business[] = await res.json();
  return (
    <ul className="space-y-2 w-full flex flex-col items-center justify-center">
      {!businesses ? (
        <p>No businesses found</p>
      ) : (
        businesses?.map((business) => (
          <li
            key={business.id}
            className="text-xs text-slate-50 bg-slate-600 rounded w-[70%] flex items-center justify-between"
          >
            <Link
              className="flex-1 flex items-center justify-between py-1 px-2"
              href={`/business/${business.id}`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FaRegCircle />
                <div className="">{business.name}</div>
              </div>

              <div className="">{business.type}</div>
            </Link>
            <DeleteButton businessId={business.id} />
          </li>
        ))
      )}
    </ul>
  );
}
