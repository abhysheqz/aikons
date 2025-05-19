import React from "react";
const SoftDrink_02: React.FC<
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
        d="M6.632 18.263 5.031 6.1C4.91 5.188 5.116 5 6.126 5h10.749c1.01 0 1.214.188 1.094 1.1l-1.601 12.163c-.218 1.655-.327 2.483-.954 2.98-1.297 1.031-6.587.987-7.828 0-.627-.497-.736-1.325-.954-2.98"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m13.5 19 .446-16.059A1 1 0 0 1 14.944 2h4.057"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M6 10c.182-.333.782-1 2.09-1 1.637 0 1.205 1 2.296 1s2.728-1 4.364-1 2.75 1 2.75 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.009 16H10"
      />
    </svg>
  );
};
export default SoftDrink_02;
