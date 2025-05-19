import React from "react";
const ShareLocation_02: React.FC<
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
        d="M12 2c5.524 0 10 4.478 10 10s-4.476 10-10 10M9 21.5a11 11 0 0 1-3.277-1.754m0-15.492A11.3 11.3 0 0 1 9 2.5m-7 7.746a9.6 9.6 0 0 1 1.296-3.305M2 13.754a9.6 9.6 0 0 0 1.296 3.305"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.998 11h.006"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c-2.21 0-4 1.809-4 4.04 0 1.276.5 2.268 1.5 3.155.705.624 1.987 1.964 2.5 2.805.539-.824 1.795-2.18 2.5-2.806 1-.886 1.5-1.878 1.5-3.154C16 8.81 14.21 7 12 7Z"
      />
    </svg>
  );
};
export default ShareLocation_02;
