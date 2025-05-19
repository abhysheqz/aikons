import React from "react";
const InspectCode: React.FC<
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
        d="m14 9 2 2-2 2M8 9l-2 2 2 2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m12 8-2 6M17.5 17.5 22 22M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0Z"
      />
    </svg>
  );
};
export default InspectCode;
