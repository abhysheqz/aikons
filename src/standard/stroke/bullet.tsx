import React from "react";
const Bullet: React.FC<
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
      viewBox="0 0 24 25"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.666 9.667C19.437 7.896 20.5 4 20.5 4s-3.896 1.063-5.667 2.833m2.833 2.834-2.833-2.834m2.833 2.834-1.416 2.125m-1.417-4.959L12.708 8.25m3.542 3.542L12.708 8.25m3.542 3.542-6.375 6.375a1.503 1.503 0 0 1-2.125 0m4.958-9.917-6.375 6.375a1.503 1.503 0 0 0 0 2.125m1.417 1.417L6.333 16.75m1.417 1.417a1.503 1.503 0 0 1 0 2.125L7.04 21 3.5 17.458l.708-.708a1.503 1.503 0 0 1 2.125 0"
      />
    </svg>
  );
};
export default Bullet;
