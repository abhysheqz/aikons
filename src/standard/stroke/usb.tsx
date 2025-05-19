import React from "react";
const Usb: React.FC<
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
        d="M15.5 6V3a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 16.5V22M6 10.87V6.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.37a2 2 0 0 1-.361 1.147l-2.542 3.63a2 2 0 0 1-1.638.853H10.54a2 2 0 0 1-1.638-.853l-2.541-3.63A2 2 0 0 1 6 10.87M11 8.5h2"
      />
    </svg>
  );
};
export default Usb;
