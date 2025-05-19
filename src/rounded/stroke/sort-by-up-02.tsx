import React from "react";
const SortByUp_02: React.FC<
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
        d="M3 15h11M3 9h7M3 21h16M18.5 3v12m0-12c-.7 0-2.009 1.994-2.5 2.5M18.5 3c.7 0 2.009 1.994 2.5 2.5"
      />
    </svg>
  );
};
export default SortByUp_02;
