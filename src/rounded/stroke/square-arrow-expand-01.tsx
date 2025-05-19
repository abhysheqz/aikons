import React from "react";
const SquareArrowExpand_01: React.FC<
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
        d="M7.485 16.515c-.575-.575-.479-3.017-.479-3.017m.48 3.017c.574.575 3.016.479 3.016.479m-3.017-.48L11 13m5.515-5.515c-.575-.575-3.017-.479-3.017-.479m3.017.48c.575.574.479 3.016.479 3.016m-.48-3.017L13 11"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12Z"
      />
    </svg>
  );
};
export default SquareArrowExpand_01;
