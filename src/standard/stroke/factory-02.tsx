import React from "react";
const Factory_02: React.FC<
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
        d="m8 14 8-4v4l6-4v12H8.153M3 10h4M2.5 7 2 22h6L7.5 7zM13 2H7a2 2 0 0 0-2 2M10 5h3M12.5 18H14m3 0h1.5"
      />
    </svg>
  );
};
export default Factory_02;
