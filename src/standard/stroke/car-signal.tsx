import React from "react";
const CarSignal: React.FC<
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
        d="M18 21.5v-2a.5.5 0 0 0-.5-.5h-12a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5.394a2 2 0 0 1 .336-1.11l1.574-2.361q.09-.135.157-.282l1.9-4.18A2 2 0 0 1 7.787 7h7.425a2 2 0 0 1 1.82 1.172l1.901 4.18q.067.148.157.283l1.574 2.361a2 2 0 0 1 .336 1.11V21.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 11 2 1.5 2 .5h11l2-.5 2-1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 16v.01M6 16v.01"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 7a2 2 0 0 0-2-2M22 7a5 5 0 0 0-5-5"
      />
    </svg>
  );
};
export default CarSignal;
