import { useGetChild } from "@/services/useGetChild";
import { Modal, Button } from "flowbite-react";
import { useChildStore } from "./childStore";
import { TimePicker } from "@asphalt-react/time-picker";
import { useEffect, useState } from "react";

export const CheckInOut = ({ show }: { show: boolean }) => {
  const handleClose = () => useChildStore.setState({ selectedChild: "" });
  const now = new Date();
  const child = useGetChild();
  //   console.log(new Date(child?.pickupTime));
  const pickupTime = child?.pickupTime
    ? new Date(child.pickupTime)
    : new Date(now.setHours(18, 0, 0, 0));

  const [time, setTime] = useState<Date[]>([pickupTime, pickupTime]);
  const isCheckedIn = child?.checkedIn;

  useEffect(() => {
    setTime([pickupTime, pickupTime]);
  }, [child?.pickupTime]);

  return (
    <>
      <Modal show={show} onClose={handleClose} size="4xl">
        <Modal.Header>Check in / out </Modal.Header>
        <Modal.Body>
          <div className="flex items-start justify-between min-h-52">
            <h2 className="text-2xl font-bold">{child?.name.fullName}</h2>

            {isCheckedIn ? (
              <Button color="warning">Check out</Button>
            ) : (
              <div className="flex justify-center items-center space-x-6">
                {/* <input type="time" step={360} /> */}
                <TimePicker value={time} onChange={setTime} id="pickupTime" />
                {/* <TimePic */}
                <Button color="success">Check in</Button>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* {isCheckedIn ? (
            <Button color="warning">Check out</Button>
          ) : (
            <Button color="success">Check in</Button>
          )} */}
          <Button color="gray" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
