import React from "react";
const Cabinet_02: React.FC<
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
        d="M3 4h18l-.77 9.25A3 3 0 0 1 17.24 16H6.76a3 3 0 0 1-2.99-2.75zM6.5 16 5 20m12.5-4 1.5 4M12 16V4M22 4H2M9 9.5v1M15 10.5v-1"
      />
    </svg>
  );
};
export default Cabinet_02;
