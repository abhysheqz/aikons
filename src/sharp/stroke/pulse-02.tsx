import React from "react";
const Pulse_02: React.FC<
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
        d="M2 12h3l1.5-4H7l2 7h.5l1-3h2L14 7h.5l2 10h.5l2-5h3"
      />
    </svg>
  );
};
export default Pulse_02;
