import React from "react";
const Spoon: React.FC<
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
        strokeWidth={1.5}
        d="M21.105 2.895c-1.715-1.716-5.447-.765-7.377 1.165-1.04 1.04-1.345 2.152-1.136 3.226.21 1.08.19 2.299-.613 3.052L2.503 19.24a1.597 1.597 0 1 0 2.257 2.257l8.902-9.476c.753-.802 1.972-.823 3.052-.613 1.074.209 2.186-.095 3.226-1.136 1.93-1.93 2.88-5.661 1.165-7.377Z"
      />
    </svg>
  );
};
export default Spoon;
