import React from "react";
const Factory: React.FC<
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
        d="M3 10h6.003M13.003 2H8a2 2 0 0 0-2 2v0M16 2h1M11.004 5h6.003M8.977 13.522l6.079-2.463v2.487l5.932-2.487L21 21a1 1 0 0 1-1 1l-11.022-.002m0-8.475v8.475m0-8.475v-5.52a1 1 0 0 0-1.002-1l-3.977.008a1 1 0 0 0-.998 1V21a1 1 0 0 0 1 1l4.977-.003"
      />
    </svg>
  );
};
export default Factory;
