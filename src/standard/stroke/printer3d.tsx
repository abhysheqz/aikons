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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 2H2v2.5h6zM22 2h-6v2.5h6zM16 2H8v8h8zM13.5 13h-3L8 10h8zM13.5 13h-3v3l1.5 1.5 1.5-1.5zM12 20a2 2 0 0 1-2 2H2M14 5v.01M14 7.5v.01"
      />
    </svg>
  );
};
export default Printer3d;
