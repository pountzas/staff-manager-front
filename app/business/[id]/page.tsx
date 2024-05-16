import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const { id } = params;
  const res = await fetch(`http://localhost:3001/api/staff/business/${id}`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const staff = await res.json();

  return (
    <div>
      page: {id}
      <ul>
        {staff.map((staff: Staff) => (
          <li key={staff.id}>{staff.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
