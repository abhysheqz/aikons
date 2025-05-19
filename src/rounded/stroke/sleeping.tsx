import React from "react";
const Sleeping: React.FC<
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
        d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q-.002-1.03-.2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 11H8.707c-.453 0-.887-.18-1.207-.5m6.5.5h1.293c.453 0 .887-.18 1.207-.5"
      />
      <circle
        cx={12}
        cy={16}
        r={2}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 2h2.947c.62 0 .93 0 1.013.2s-.128.44-.55.92l-2.425 2.76c-.422.48-.633.72-.55.92s.392.2 1.012.2H21"
      />
    </svg>
  );
};
export default Sleeping;
