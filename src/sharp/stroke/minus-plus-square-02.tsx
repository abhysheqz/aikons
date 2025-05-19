import React from "react";
const MinusPlusSquare_02: React.FC<
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
        d="M3 21h18V3H3zM17 7 7 17m8 0v-2m0 0v-2m0 2h-2m2 0h2M7 9h4"
      />
    </svg>
  );
};
export default MinusPlusSquare_02;
