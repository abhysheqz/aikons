import React from "react";
const MapsSquare_01: React.FC<
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
        d="M3 2a1 1 0 0 0-1 1v17.586l7.823-7.823L4 6.94V4h16v16h-2.94l-5.823-5.823L3.414 22H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.572 14.281c.178.104.328.184.435.239l.493.23.493-.23a9.3 9.3 0 0 0 1.745-1.164c.937-.797 2.012-2.076 2.012-3.79 0-2.364-1.883-4.316-4.25-4.316s-4.25 1.952-4.25 4.316c0 1.713 1.075 2.993 2.012 3.79a9.3 9.3 0 0 0 1.31.925M14.493 8C13.67 8 13 8.672 13 9.5s.669 1.5 1.493 1.5h.014C15.33 11 16 10.328 16 9.5S15.331 8 14.507 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MapsSquare_01;
