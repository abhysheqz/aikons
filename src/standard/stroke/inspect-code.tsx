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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.5 22 22M20 11a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
      />
      <path
        fill="#D9D9D9"
        d="M14.5 9.5 16 11l-1.5 1.5M7.5 9.5 6 11l1.5 1.5M12 8.5l-2 5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.5 9.5 16 11l-1.5 1.5m-7-3L6 11l1.5 1.5m4.5-4-2 5"
      />
    </svg>
  );
};
export default InspectCode;
