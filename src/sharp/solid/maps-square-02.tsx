import React from "react";
const MapsSquare_02: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 5.25c-2.29 0-4.25 1.728-4.25 3.982 0 1.29.576 2.285 1.59 3.106.284.23.7.605 1.099 1.005.406.408.756.8.937 1.073a.75.75 0 0 0 1.234.02c.42-.587 1.465-1.624 2.05-2.098 1.014-.821 1.59-1.816 1.59-3.106 0-2.254-1.96-3.982-4.25-3.982M14.493 8C13.67 8 13 8.672 13 9.5s.669 1.5 1.493 1.5h.014C15.332 11 16 10.328 16 9.5S15.332 8 14.507 8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 2a1 1 0 0 0-1 1v17.586l7.823-7.823L4 6.94V4h16v16h-2.94l-5.823-5.823L3.414 22H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
      />
    </svg>
  );
};
export default MapsSquare_02;
