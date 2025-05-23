import React from "react";
const PiggyBank: React.FC<
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
        d="M14.494 8.003a4.3 4.3 0 0 0-2-.501c-.695 0-1.366.175-1.998.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.496 11.003h.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.998 8.502c.5-.5 1-1.438 1-2.67C21.998 4.268 20.655 3 18.999 3c-.35 0-.686.057-.999.161M4.013 11.506H2.01a.01.01 0 0 0-.01.01v2.968a.01.01 0 0 0 .004.008l5.015 3.517v2.98h2.004l.996-1.49c2.248.566 4.54.37 6 .005L17.019 21h2.04l-.05-3c4.168-3.516 3.15-7.2 1.877-9.14-1.05-1.597-3.965-4.356-9.122-3.783-5.285.587-7.225 3.89-7.75 6.429"
      />
    </svg>
  );
};
export default PiggyBank;
