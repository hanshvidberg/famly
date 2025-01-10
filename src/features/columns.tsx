import {
  BiSolidCheckCircle,
  BiSolidXCircle,
  BiSolidDonateHeart,
} from "react-icons/bi";

import { Child } from "@/types/child";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "flowbite-react";
import { useChildStore } from "./ChildrenList/childStore";

export const tableColumns: ColumnDef<Child>[] = [
  {
    accessorFn: (row) => `${row.name.fullName}`,
    id: "fullName",
    cell: (info) => (
      <div className="flex items-center gap-3 min-w-[200px]">
        <img
          src={info.row.original.image.small}
          alt="Child"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />
        <div className="truncate">
          <span className="block truncate">
            {info.row.original.name.fullName}
          </span>
        </div>
      </div>
    ),
    header: () => <span>Child</span>,
    footer: (props) => props.column.id,
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    enableSorting: false,
    accessorKey: "checkedIn",
    header: () => <span className="text-center w-full">Checked in</span>,
    cell: (info) => (
      <div className="flex items-center justify-center w-[50px]">
        {info.getValue() ? (
          <BiSolidCheckCircle className="text-secondary w-6 h-6" />
        ) : (
          "-"
        )}
      </div>
    ),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    enableSorting: false,
    accessorKey: "pickupTime",
    header: "Pickup Time",
    cell: (info) => (
      <div className="w-[75px]">
        {info.row.original.pickupTime
          ? new Date(info.row.original.pickupTime).toLocaleTimeString(
              undefined,
              {
                hour: "2-digit",
                minute: "2-digit",
              }
            )
          : " - "}
      </div>
    ),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "actions",
    header: () => "",
    cell: (info) => (
      <div className="flex justify-end min-w-[100px]">
        <Button
          color="light"
          className="flex items-center justify-center whitespace-nowrap"
          onClick={() => {
            useChildStore.setState({
              selectedChild: info.row.original.childId,
            });
          }}
        >
          <span className="mr-2">Check in / out</span>
          <BiSolidDonateHeart className="w-5 h-5 flex-shrink-0" />
        </Button>
      </div>
    ),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
];
