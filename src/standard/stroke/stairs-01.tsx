import React from "react";
const Stairs_01: React.FC<
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
        d="M16.5 3.5h3a1 1 0 0 1 1 1v14a2 2 0 0 1-2 2h-14a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3v-3a1 1 0 0 1 1-1h3v-3a1 1 0 0 1 1-1h3v-3a1 1 0 0 1 1-1Z"
      />
    </svg>
  );
};
export default Stairs_01;
