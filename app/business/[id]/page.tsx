"use client";
import Add from "@/components/Add";
import { DeleteButton } from "@/components/DeleteButton";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;
  const [staffMembers, setStaffMembers] = useState<Staff[]>([]);
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const fetchStaffMembers = async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/api/staff/business/${id}`
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Staff[] = await res.json();
        console.log(data);
        setStaffMembers(data);
        console.log(staffMembers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStaffMembers();
  }, [id]);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/businesses/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data: Business = await res.json();
        console.log(data);
        setBusiness(data);
        console.log(business);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBusiness();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-lg font-semibold text-slate-800 pt-8 pb-4">
        {business ? business.name : "Staff Manager"}
      </h1>
      <Add businessId={business?.id} business={false} />
      <ul className="space-y-2 w-full flex flex-col items-center justify-center">
        {staffMembers.map((staff) => (
          <li
            key={staff.id}
            className="text-xs text-slate-50 bg-slate-600 rounded w-[70%] flex items-center justify-between"
          >
            <Link
              className="flex-1 flex items-center justify-between py-1 px-2"
              href={`/staff/${staff.id}`}
            >
              <div className="flex items-center justify-center space-x-2">
                <FaRegCircle />
                <div className="">{staff.first_name}</div>
              </div>

              <div className="">{staff.position}</div>
            </Link>
            <DeleteButton staffId={staff.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
