import React from "react";
const Notification_02: React.FC<
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
        fill="currentColor"
        d="M20.649 17.06c.103.08.351.19.351.19v1.5H3v-1.5c.373 0 .797-.26 1.172-.876.364-.6.578-1.388.578-2.067V9a7.25 7.25 0 0 1 14.5 0v5.307c0 .612.296 1.387.741 2.029.218.313.45.562.657.724M8.217 20A4.29 4.29 0 0 0 12 22.25 4.29 4.29 0 0 0 15.782 20z"
      />
    </svg>
  );
};
export default Notification_02;
