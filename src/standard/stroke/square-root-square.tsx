import React from "react";
const SquareRootSquare: React.FC<
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
        d="M2.5 19.5a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-15a2 2 0 0 0-2-2h-15a2 2 0 0 0-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 13-.724-1.447C14.607 11.214 14.38 11 14 11m1.5 2 .724 1.447c.151.303.445.514.776.553m-1.5-2-.9 1.2c-.275.367-.665.688-1.1.8m2-2 .9-1.2c.275-.367.665-.688 1.1-.8M6 13.5l.519-.519a1 1 0 0 1 1.601.26L9.5 16l2.28-7.298A1 1 0 0 1 12.736 8H18"
      />
    </svg>
  );
};
export default SquareRootSquare;
