import React from "react";
const Hotspot: React.FC<
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
      <path fill="currentColor" d="M9 14.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0" />
      <path
        fill="currentColor"
        d="M3 14.25a9 9 0 0 1 18 0c0 1.976-.636 3.8-1.714 5.285l1.589 1.215A10.96 10.96 0 0 0 23 14.25c0-6.075-4.925-11-11-11s-11 4.925-11 11c0 2.43.79 4.679 2.125 6.5l1.59-1.215A8.96 8.96 0 0 1 3 14.25"
      />
      <path
        fill="currentColor"
        d="M7 14.25a5 5 0 1 1 9.106 2.854l1.59 1.215a7 7 0 1 0-11.393 0l1.59-1.215A4.97 4.97 0 0 1 7 14.25"
      />
    </svg>
  );
};
export default Hotspot;
