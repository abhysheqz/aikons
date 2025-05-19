import React from "react";
const TrafficIncident: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.455 14.727 4 13.273m1.455 1.454L4 16.182l2.91 2.909 2.908.727m-4.363-5.09 7.272-7.273m0 0L11.273 6m1.454 1.455L14.182 6l2.909 2.91.727 2.908m-8 8L14.182 22 20 16.182l-2.182-4.364m-8 8 8-8m-8 8L9.091 22m8.727-10.182L20 11.091m-4.364-.727 1.226-1.226m-8.498 8.498-1.15 1.15m5.15-7.332-2.91 2.91M3 2h18"
      />
    </svg>
  );
};
export default TrafficIncident;
