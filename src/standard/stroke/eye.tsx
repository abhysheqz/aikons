import React from "react";
const Eye: React.FC<
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
        d="M22 8s-4.477-5-10-5S2 8 2 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 7c-4.913 0-8.569 4.782-10 7 1.431 2.218 5.087 7 10 7s8.569-4.782 10-7c-1.431-2.218-5.087-7-10-7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14a3 3 0 1 0-6 0 3 3 0 0 0 6 0"
      />
    </svg>
  );
};
export default Eye;
