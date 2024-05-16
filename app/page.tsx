import Add from "@/components/Add";
import { BusinessList } from "@/components/BusinessList";

export default async function BusinessesPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold text-slate-800 pt-8 pb-4">
        Business Manager
      </h1>
      <Add business={true} />
      <BusinessList />
    </div>
  );
}
