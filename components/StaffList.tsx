import Link from "next/link";

type Props = {
  staffMembers: Staff[];
};

export function StaffList({ staffMembers }: Props) {
  console.log("111", staffMembers);

  return (
    <ul>
      {!staffMembers && <p>No staffMembers found</p>}
      {staffMembers?.map((staff) => (
        <li key={staff.id}>
          <Link href={`/staff/${staff.id}`}>{staff.lastName}</Link>
        </li>
      ))}
    </ul>
  );
}
