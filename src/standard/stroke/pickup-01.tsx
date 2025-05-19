import React from "react";
const Pickup_01: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 4 2.497 6.243a2 2 0 0 0 1.857 1.257H21.5M22 14.5h-1.5M17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 18H3.803a1 1 0 0 1-.555-.168l-.803-.535A1 1 0 0 1 2 16.465V11.5h10m0 0V18m0-6.5V4h2.823a2 2 0 0 1 1.749 1.029l1.754 3.157q.174.314.447.548l2.18 1.868A3 3 0 0 1 22 12.88V17a1 1 0 0 1-1 1h-2m-7 0H9m3 0h3"
      />
    </svg>
  );
};
export default Pickup_01;
