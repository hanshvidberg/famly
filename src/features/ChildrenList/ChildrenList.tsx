"use client";

import { useGetChildren } from "@/services/useGetChildren";
import { Search } from "./TableTop";
import { useMemo, useState } from "react";
import { tableColumns } from "../columns";
import { FamlyTable } from "@/components/Table";
import { useChildStore } from "./childStore";
import { Button, Modal } from "flowbite-react";
import { useGetChild } from "@/services/useGetChild";
import { CheckInOut } from "./CheckInOut";

export const ChildrenList = () => {
  const { selectedChild, setSelectedChild } = useChildStore();
  //   const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading, error } = useGetChildren();
  if (data) {
    console.log(data);
  }

  const columns = useMemo(() => tableColumns, []);
  return (
    <div>
      {/* <Search /> */}
      <h1 className="text-2xl font-bold">Children</h1>
      <div>id: {selectedChild}</div>
      {data && <FamlyTable data={data?.children} columns={columns} />}
      <CheckInOut show={Boolean(selectedChild)} />
      {/* <Modal.Header>Modal title</Modal.Header>
        <Modal.Body>Modal content</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setSelectedChild("")}>Close</Button>
        </Modal.Footer> */}
    </div>
  );
};
