import { useGetChild } from "@/services/useGetChild";
import { Modal, Button } from "flowbite-react";
import { useChildStore } from "./childStore";
import { TimePicker } from "@asphalt-react/time-picker";
import { useEffect, useState } from "react";
import { CheckinResponse } from "@/services/useCheckin";

export const CheckInOut = ({
  show,
  onCheckout,
  onCheckin,
  error,
}: {
  show: boolean;
  onCheckout: () => void;
  onCheckin: ({ pickupTime }: { pickupTime?: string }) => void;
  error?: string;
}) => {
  const handleClose = () => useChildStore.setState({ selectedChild: "" });
  const now = new Date();
  const child = useGetChild();
  const pickupTime = child?.pickupTime
    ? new Date(child.pickupTime)
    : new Date(now.setHours(15, 0, 0, 0));

  const [time, setTime] = useState<Date[]>([pickupTime, pickupTime]);
  const isCheckedIn = child?.checkedIn;

  useEffect(() => {
    setTime([pickupTime, pickupTime]);
  }, [child?.pickupTime]);

  return (
    <>
      <Modal show={show} onClose={handleClose} size="3xl">
        <Modal.Header>Check in / out </Modal.Header>
        <Modal.Body>
          <div className="md:flex items-start justify-between min-h-56">
            <h2 className="text-2xl font-bold">{child?.name.fullName}</h2>

            {isCheckedIn ? (
              <Button color="warning" onClick={onCheckout}>
                Check out
              </Button>
            ) : (
              <div>
                <div className="md:flex justify-center items-end space-x-6">
                  <label className="flex flex-col">
                    Pickup time
                    <TimePicker
                      value={time}
                      onChange={setTime}
                      id="pickupTime"
                    />
                  </label>
                  <Button
                    color="success"
                    onClick={() =>
                      onCheckin({ pickupTime: time[0].toISOString() })
                    }
                  >
                    Check in
                  </Button>
                </div>
                {error && <p className="text-red-500 my-2">{error}</p>}
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="gray" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
