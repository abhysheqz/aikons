import React from "react";
const Door_02: React.FC<
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
        d="M5 22V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v18M3 22h18M16 13v-2"
      />
    </svg>
  );
};
export default Door_02;
