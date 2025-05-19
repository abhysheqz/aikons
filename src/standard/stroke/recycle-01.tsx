import React from "react";
const Recycle_01: React.FC<
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
        d="M18 16s-4 2-4 6m.713-2.683-.491-1.319a3 3 0 0 1-.175-.665C13.45 12.781 18.654 12 22 12c0 3.333-.843 8.561-5.838 7.678zM10 20H2l5-9 1 2m6-3.5 2 .5-4-8-3.5 6.5"
      />
    </svg>
  );
};
export default Recycle_01;
