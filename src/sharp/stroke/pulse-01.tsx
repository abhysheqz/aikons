import React from "react";
const Pulse_01: React.FC<
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
        strokeWidth={1.5}
        d="M2 12h4l1.5-4H8l1.5 7h.5l2.5-9h.5l2.5 12h.5l2-6h4"
      />
    </svg>
  );
};
export default Pulse_01;
