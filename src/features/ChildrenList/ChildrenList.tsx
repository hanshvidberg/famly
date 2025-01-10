"use client";

import { useGetChildren } from "@/services/useGetChildren";
import { useMemo } from "react";
import { tableColumns } from "../columns";
import { FamlyTable } from "@/components/Table";
import { useChildStore } from "./childStore";
import { CheckInOut } from "./CheckInOut";
import { useCheckout } from "@/services/useCheckout";
import { useCheckin } from "@/services/useCheckin";
import { Spinner, Toast } from "flowbite-react";
import { useToastStore } from "@/hooks/useToast";

export const ChildrenList = () => {
  const { selectedChild } = useChildStore();
  const { data, isFetching } = useGetChildren();
  const { mutate: checkout } = useCheckout();
  const { mutate: checkin, error: checkinError } = useCheckin();
  const { toasts } = useToastStore();
  const numberOfCheckedIn = data?.children.filter(
    (child) => child.checkedIn
  ).length;

  const handleCheckout = () => {
    checkout();
  };

  const handleCheckin = async ({ pickupTime }: { pickupTime?: string }) => {
    checkin({ pickupTime: pickupTime || "" });
  };

  const columns = useMemo(() => tableColumns, []);
  return (
    <div className="py-4">
      <h1 className="text-2xl font-bold text-black-500">
        Children daycare check in / out
        {isFetching ? <Spinner /> : null}
      </h1>
      <p className="text-sm text-gray-500 py-2">
        {numberOfCheckedIn} checked in,{" "}
        {data?.children.length - numberOfCheckedIn} checked out
      </p>

      <FamlyTable data={data?.children} columns={columns} />
      <CheckInOut
        error={checkinError?.error}
        show={Boolean(selectedChild)}
        onCheckout={handleCheckout}
        onCheckin={handleCheckin}
      />

      <div className="absolute top-8 right-8">
        {toasts.map((toast) => (
          <div key={toast.id}>
            <Toast title={toast.message} className={`bg-secondary `}>
              <p className="font-bold  text-white">{toast.message}</p>
            </Toast>
          </div>
        ))}
      </div>
    </div>
  );
};
