import React from "react";
const Headphones: React.FC<
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
        strokeWidth={1.5}
        d="M17 13.5v6l2 1c1.672-1.452 2.509-2.178 2.815-2.979A2.7 2.7 0 0 0 22 16.5a2.7 2.7 0 0 0-.185-1.021c-.306-.8-1.143-1.527-2.815-2.979zM7 13.5v6l-2 1c-1.673-1.452-2.509-2.178-2.815-2.979A2.7 2.7 0 0 1 2 16.5a2.7 2.7 0 0 1 .185-1.021c.306-.8 1.142-1.527 2.815-2.979z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 12.5v-2a7 7 0 1 0-14 0v2"
      />
    </svg>
  );
};
export default Headphones;
