import React from "react";
const LocationUpdate_01: React.FC<
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
        d="M12 17s4.5-2 4.5-5.5a4.5 4.5 0 1 0-9 0C7.5 15 12 17 12 17Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M12 11.5h.009"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.5 10.5 22 12c0-5.523-4.477-10-10-10-4.1 0-7.625 2.468-9.168 6M4.5 13.5 2 12c0 5.523 4.477 10 10 10 4.1 0 7.625-2.468 9.168-6"
      />
    </svg>
  );
};
export default LocationUpdate_01;
