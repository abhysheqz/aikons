import React from "react";
const Touchpad_04: React.FC<
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
        d="M17 13.5v-1a1.5 1.5 0 0 0-1.5-1.5h-1m-.5 2V7a1.5 1.5 0 0 0-3 0v9l-1.382-1.699a1.547 1.547 0 0 0-2.282.125 1.5 1.5 0 0 0-.03 1.854l3.186 4.394a2 2 0 0 0 1.62.826h7.24c1.463 0 2.648-1.142 2.648-2.55V14.5a1.5 1.5 0 0 0-1.5-1.5H20m-.5 1v-.5A1.5 1.5 0 0 0 18 12h-.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 9.5v-5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h.5"
      />
    </svg>
  );
};
export default Touchpad_04;
