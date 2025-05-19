import React from "react";
const Lamp: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M11.996 12.998v6" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.016 21.998h5.962l-.994-3H10.01z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.506 12.845 8.02 2.002h7.94l4.533 10.842a.1.1 0 0 1-.091.14H3.598a.1.1 0 0 1-.092-.14Z"
      />
    </svg>
  );
};
export default Lamp;
