import React from "react";
const LocationUpdate_02: React.FC<
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
        d="M19.5 10.5 22 12c0-5.523-4.477-10-10-10-4.1 0-7.625 2.468-9.168 6M4.5 13.5 2 12c0 5.523 4.477 10 10 10 4.1 0 7.625-2.468 9.168-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155.705.624 1.987 1.964 2.5 2.805.539-.824 1.795-2.18 2.5-2.806 1-.886 1.5-1.878 1.5-3.154C16 8.81 14.21 7 12 7Z"
      />
    </svg>
  );
};
export default LocationUpdate_02;
