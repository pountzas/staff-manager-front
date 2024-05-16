"use client";
import React from "react";
import { AddButtonModal } from "./AddButtonModal.client";

type Props = {
  businessId?: number | null | undefined;
  business: boolean;
};
function Add({ businessId, business }: Props) {
  return <AddButtonModal business={business} businessId={businessId} />;
}

export default Add;
