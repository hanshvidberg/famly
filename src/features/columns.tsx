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
  //   {
  //     accessorKey: "firstName",
  //     cell: (info) => info.getValue(),
  //     footer: (props) => props.column.id,
  //   },
  {
    accessorFn: (row) => `${row.name.fullName}`,
    id: "fullName",
    cell: (info) => (
      <div className="flex space-x-5">
        <div>
          <img
            src={info.row.original.image.small}
            alt="Child"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="flex flex-col flex-start min-w-40">
          <span>{info.row.original.name.fullName}</span>
          {/* <span>
            {isToday(new Date(info.row.original.birthday))
              ? "Today"
              : new Date(info.row.original.birthday).toLocaleDateString()}
          </span> */}
        </div>
      </div>
    ),
    header: () => <span className="text-left">Child</span>,
    footer: (props) => props.column.id,
    enableSorting: false,
    enableColumnFilter: false,
  },
  //   {
  //     accessorKey: "image",
  //     header: () => "",

  //     enableSorting: false,
  //     cell: (info) => (
  //       <img
  //         src={info.row.original.image.small}
  //         alt="Child"
  //         className="w-10 h-10 rounded-full"
  //       />
  //     ),
  //     footer: (props) => props.column.id,
  //     enableColumnFilter: false,
  //   },
  {
    enableSorting: false,
    accessorKey: "checkedIn",
    header: () => <span>Checked in</span>,
    cell: (info) =>
      info.getValue() ? (
        <div className="flex items-center">
          <BiSolidCheckCircle className="text-green-500 w-full h-8" />
        </div>
      ) : (
        <div className="flex items-center">
          <BiSolidXCircle className="text-gray-500 w-full h-4" />
        </div>
      ),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    enableSorting: false,
    accessorKey: "pickupTime",
    header: "Pickup Time",
    cell: (info) =>
      info.row.original.pickupTime
        ? new Date(info.row.original.pickupTime).toLocaleTimeString()
        : " - ",
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
  {
    accessorKey: "actions",
    header: () => "",
    cell: (info) => (
      <div>
        <Button
          color="light"
          className=" flex items-center justify-center"
          onClick={() => {
            useChildStore.setState({
              selectedChild: info.row.original.childId,
            });
          }}
        >
          <span className="mr-2 flex items-center">Check in / out</span>
          <BiSolidDonateHeart className="w-full h-6" />
        </Button>
      </div>
    ),
    footer: (props) => props.column.id,
    enableColumnFilter: false,
  },
];
