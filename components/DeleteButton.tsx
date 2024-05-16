"use client";
import Link from "next/link";
import React from "react";
import { MdDelete } from "react-icons/md";

type Props = {
  businessId?: number;
  staffId?: number;
};

export const DeleteButton = ({ businessId, staffId }: Props) => {
  const handleDelete = async () => {
    if (businessId) {
      const res = await fetch(
        `http://localhost:3001/api/businesses/${businessId}`,
        {
          method: "DELETE"
        }
      );
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    }
    if (staffId) {
      const res = await fetch(`http://localhost:3001/api/staff/${staffId}`, {
        method: "DELETE"
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    }
  };

  return (
    <Link href={`/`} onClick={handleDelete} className="cursor-pointer pr-2">
      <MdDelete />
    </Link>
  );
};
