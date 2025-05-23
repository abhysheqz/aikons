import React from "react";
const Charity: React.FC<
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
        d="M7 19h10M19 16h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.315 19a3.39 3.39 0 0 0 1.185-2.571C15.5 14.535 13.933 13 12 13s-3.5 1.535-3.5 3.429A3.39 3.39 0 0 0 9.685 19M20 10h-2.487a2 2 0 0 1-.964-.248L14.5 8.625h-1C12 8.625 11 7.476 11 6.5l2.684-.894a1 1 0 0 1 .633 0l2.683.894M11 7 6.789 8.404a2 2 0 0 1-2.49-1.155v0a.877.877 0 0 1 .423-1.11l7.585-3.792a2 2 0 0 1 1.439-.136l6.253 1.769"
      />
    </svg>
  );
};
export default Charity;
