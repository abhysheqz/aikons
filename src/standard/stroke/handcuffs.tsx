import React from "react";
const Handcuffs: React.FC<
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
        d="M14.5 8h4a.5.5 0 0 1 .5.5v2.303a6 6 0 0 1-6 10.395"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 18a2 2 0 0 0 2-2c0-.932-.637-1.778-1.5-2"
      />
      <circle
        cx={8}
        cy={14}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7.5V4.562a2 2 0 0 1 2.485-1.94l4 1A2 2 0 0 1 16 5.561V9.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 20a6 6 0 0 0 3-11.197V6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v2.303A6 6 0 0 0 8 20"
      />
    </svg>
  );
};
export default Handcuffs;
