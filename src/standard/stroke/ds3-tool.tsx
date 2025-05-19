import React from "react";
const Ds3Tool: React.FC<
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
        d="M5.003 18.006c.156-2.495.616-4.321 1.005-5.382.197-.535.62-.934 1.161-1.068 3.005-.741 6.657-.741 9.662 0 .541.134.964.533 1.16 1.068.39 1.06.85 2.887 1.006 5.382.092 1.48-1.811 2.385-2.996 2.994l-1.21-2.015a1 1 0 0 0-.857-.485h-3.851a1 1 0 0 0-.87.507L8.085 21c-1.184-.609-3.174-1.515-3.082-2.994Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 14.5V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8.5M11 6h2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.008 15h-.009M15.008 15h-.009"
      />
    </svg>
  );
};
export default Ds3Tool;
