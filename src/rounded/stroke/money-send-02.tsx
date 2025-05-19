import React from "react";
const MoneySend_02: React.FC<
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
        d="M14.5 14.001a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 7.89c-1.12-.006-2.44-.132-4.122-.465C2.921 7.235 2 7.946 2 8.922V18.94c0 .689.473 1.293 1.145 1.441 6.965 1.536 8.104-.27 12.855-.27 1.51 0 2.736.143 3.676.32 1.096.207 2.324-.632 2.324-1.747V8.91c0-.569-.324-1.083-.867-1.251-.81-.251-2.188-.57-4.133-.655"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 11.001c1.951 0 3.705-1.595 3.929-3.246M18.5 7.501c0 2.04 1.765 3.969 3.5 3.969m0 5.531c-1.9 0-3.74 1.31-3.898 3.098M6 20.497a4 4 0 0 0-4-4M9.5 5.501s1.8-2.5 2.5-2.5m2.5 2.5s-1.8-2.5-2.5-2.5m0 0v5.5"
      />
    </svg>
  );
};
export default MoneySend_02;
