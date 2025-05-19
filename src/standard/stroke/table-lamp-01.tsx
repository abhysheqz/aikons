import React from "react";
const TableLamp_01: React.FC<
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
        d="M4 12v10m16-10v10M3 12h18M4 17h16M11 14.5h2M8.409 5.486l1.8-3A1 1 0 0 1 11.066 2h1.868a1 1 0 0 1 .857.486l1.8 3A1 1 0 0 1 14.734 7H9.266a1 1 0 0 1-.857-1.514M12 7v5"
      />
    </svg>
  );
};
export default TableLamp_01;
