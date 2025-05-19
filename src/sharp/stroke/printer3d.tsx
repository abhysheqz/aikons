import React from "react";
const Printer3d: React.FC<
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
        d="M8 2H2v2.5h6zM22 2h-6v2.5h6zM8 10h8m-8 0V2h8v8m-8 0 2.5 3h3l2.5-3M13.5 13h-3v2.5L12 17l1.5-1.5zM2 22h8a2 2 0 0 0 2-2M14 5v.01M14 7.5v.01"
      />
    </svg>
  );
};
export default Printer3d;
