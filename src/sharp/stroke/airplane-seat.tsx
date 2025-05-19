import React from "react";
const AirplaneSeat: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M7 18h10.972c1.12 0 2.028-.892 2.028-1.993 0-1.507-2.028-1.993-2.028-1.993S14.284 12.596 10 14c0 0-.139-5.127-2.29-10.83-.425-1.124-1.809-1.508-2.825-.843a1.94 1.94 0 0 0-.846 2.01zM12.5 10.5H18M16 18.5 13 22m0 0H8m5 0h5"
      />
    </svg>
  );
};
export default AirplaneSeat;
