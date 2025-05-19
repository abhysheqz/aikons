import React from "react";
const Sofa_03: React.FC<
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
        d="M6.993 16v3m10-3v3M4.493 9l1.013-2.702A2 2 0 0 1 7.38 5h9.228a2 2 0 0 1 1.873 1.298L19.493 9"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m5.99 10.009.001.017m6.075 5.972h6.365a.1.1 0 0 0 .089-.054l1.487-2.91c.816 0 1.893-.543 1.988-2.053.069-1.097-.974-1.987-2.078-1.987-.648 0-1.542.548-1.835 1.381l-1.477 2.62-4.54-.009-4.67.01-1.477-2.62c-.293-.834-1.187-1.382-1.835-1.382-1.104 0-2.147.89-2.078 1.987.095 1.51 1.172 2.053 1.988 2.053l1.487 2.91a.1.1 0 0 0 .09.054h6.524m5.915-5.99v.018"
      />
    </svg>
  );
};
export default Sofa_03;
