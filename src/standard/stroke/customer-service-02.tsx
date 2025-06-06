import React from "react";
const CustomerService_02: React.FC<
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
        d="M9 21c1.657 1.333 4.343 1.333 6 0M2 16v-4C2 6.477 6.477 2 12 2s10 4.477 10 10v4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m5.52 12.26.927.464a1 1 0 0 1 .553.894v4.764a1 1 0 0 1-.553.894l-.928.465a.93.93 0 0 1-.987-.084C3.69 19 2 17.5 2 16s1.689-3.001 2.532-3.657a.93.93 0 0 1 .987-.084M19.468 12.343a.93.93 0 0 0-.987-.084l-.928.465a1 1 0 0 0-.553.894v4.764a1 1 0 0 0 .553.894l.928.465c.32.16.704.136.987-.084C20.31 19 22 17.5 22 16s-1.689-3.001-2.532-3.657"
      />
    </svg>
  );
};
export default CustomerService_02;
