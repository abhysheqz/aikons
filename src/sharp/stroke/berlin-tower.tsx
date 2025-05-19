import React from "react";
const BerlinTower: React.FC<
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
        d="M16 9a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10.5 13c0 2-1.5 7-2.5 9"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 13c0 2 1.5 7 2.5 9M12 5V2M8 16h8"
      />
    </svg>
  );
};
export default BerlinTower;
