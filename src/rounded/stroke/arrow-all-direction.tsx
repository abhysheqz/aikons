import React from "react";
const ArrowAllDirection: React.FC<
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
        d="M11.99 8.986v-5.67M11.99 20.67V15M20.67 12 15 11.948M9 12l-5.67-.052M15 6s-2.21-3-3-3-3 3-3 3M6 15s-3-2.21-3-3 3-3 3-3M18 9s3 2.21 3 3-3 3-3 3M9 18s2.21 3 3 3 3-3 3-3"
      />
    </svg>
  );
};
export default ArrowAllDirection;
