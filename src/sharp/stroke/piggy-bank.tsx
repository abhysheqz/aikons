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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.506 8.002a4.3 4.3 0 0 0-1.998-.5 4.3 4.3 0 0 0-1.998.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.512 11.002h.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 8.501c.5-.5 1-1.437 1-2.67 0-1.564-1.342-2.832-2.997-2.832-.35 0-.687.057-1 .162"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.011 11.507H2.01a.01.01 0 0 0-.01.01v2.968a.01.01 0 0 0 .004.008l5.01 3.517v2.98h2.004l.995-1.49c2.246.566 4.537.37 5.996.005l.998 1.496h2.038l-.05-3c4.165-3.516 3.149-7.199 1.876-9.138-1.048-1.598-3.962-4.357-9.115-3.784-5.28.587-7.22 3.89-7.745 6.428Z"
      />
    </svg>
  );
};
export default PiggyBank;
