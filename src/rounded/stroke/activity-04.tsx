import React from "react";
const Activity_04: React.FC<
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
        strokeWidth={1.5}
        d="M21.5 4.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.471 9.406c.029.884.029 1.906.029 3.094 0 4.243 0 6.364-1.318 7.682S15.742 21.5 11.5 21.5s-6.364 0-7.682-1.318S2.5 16.742 2.5 12.5s0-6.364 1.318-7.682S7.258 3.5 11.5 3.5c1.188 0 2.21 0 3.094.029"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 12.5H8l2-4 3 8 2-4h2.5"
      />
    </svg>
  );
};
export default Activity_04;
