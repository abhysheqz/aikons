import React from "react";
const SwimmingCap: React.FC<
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
        d="M12 2.5c-5.523 0-10 4.477-10 10q0 .507.05 1h19.9q.05-.493.05-1c0-5.523-4.477-10-10-10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 5.5c2.106 2.004 2.617 5.406 1.206 8M20 5.5c-2.106 2.004-2.617 5.406-1.206 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 19c0-1.537 2.119-1.886 3.233-2.331 1.575-.63 3.267.578 3.267 2.331s-1.692 2.96-3.267 2.331C6.12 20.886 4 20.537 4 19m0 0H2m18 0c0-1.537-2.119-1.886-3.233-2.331-1.575-.63-3.267.578-3.267 2.331s1.692 2.96 3.267 2.331C17.88 20.886 20 20.537 20 19m0 0h2m-11.5-.5c.3-.598.859-1 1.5-1s1.2.402 1.5 1"
      />
    </svg>
  );
};
export default SwimmingCap;
