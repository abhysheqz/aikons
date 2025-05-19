import React from "react";
const StickyNote_02: React.FC<
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
        d="m7.71 16.62 5.653-.8.749 5.674M19.899 5l2.099 15.893L14.178 22l-6.897-5.32-1.283-9.712z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16.999 5.001 16.998 2 2 2.015V19h8.022"
      />
    </svg>
  );
};
export default StickyNote_02;
