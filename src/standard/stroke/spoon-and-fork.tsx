import React from "react";
const SpoonAndFork: React.FC<
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
        d="m18.5 3-3.086 3.086a2 2 0 0 0 0 2.828l.336.336M22 6.5l-3.086 3.086a2 2 0 0 1-2.828 0l-.336-.336m0 0L4 21M20 4.998l-2.5 2.5M7.989 8.99c-1.194 1.194-2.832 1.492-4.325 0C2.17 7.495 1.388 4.776 2.582 3.581c1.195-1.194 3.914-.411 5.407 1.082s1.194 3.13 0 4.325m0 0L19.999 21M9.205 2.396A10 10 0 0 1 12 2c1.152 0 2.258.195 3.287.553M2.05 11Q2 11.493 2 12c0 2.032.607 3.922 1.648 5.5m4.126 3.565A10 10 0 0 0 12 22c1.524 0 2.969-.341 4.262-.951m4.09-3.549A9.95 9.95 0 0 0 22 12q-.002-.868-.143-1.696"
      />
    </svg>
  );
};
export default SpoonAndFork;
