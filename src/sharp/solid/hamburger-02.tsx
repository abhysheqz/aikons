import React from "react";
const Hamburger_02: React.FC<
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
        fill="currentColor"
        d="M20.75 15a2 2 0 1 0 0-4h-9.5l-3 3-3-3h-2a2 2 0 1 0 0 4z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.768 9.5H21.23A6.75 6.75 0 0 0 14.5 3.25h-5A6.75 6.75 0 0 0 2.768 9.5m7.24-2.625a1 1 0 0 1-1 1h-.01a1 1 0 1 1 0-2h.01a1 1 0 0 1 1 1m4.96-2.03-2 2 1.062 1.06 2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.053 16.5H2.947A5.75 5.75 0 0 0 8.5 20.75h7a5.75 5.75 0 0 0 5.552-4.25"
      />
    </svg>
  );
};
export default Hamburger_02;
