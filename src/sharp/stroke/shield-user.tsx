import React from "react";
const ShieldUser: React.FC<
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
        strokeWidth={1.5}
        d="M21 11V5c-5-.5-9-3-9-3S8 4.5 3 5v6c0 7.5 9 11 9 11s9-3.5 9-11Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 12.5c-2.21 0-4 1.567-4 3.5h8c0-1.933-1.79-3.5-4-3.5Z"
      />
    </svg>
  );
};
export default ShieldUser;
