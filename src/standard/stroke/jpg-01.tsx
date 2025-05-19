import React from "react";
const Jpg_01: React.FC<
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
        d="m4 13 .014-9a2 2 0 0 1 2.002-1.998l6.976.008L20 8.997V13M12.997 2.5V7a2 2 0 0 0 2 2H19.5M20 17v-1h-4v6h4v-2.5h-1.333M4 20v.25a1.75 1.75 0 1 0 3.5 0V16m2.5 6v-3m0 0v-3h2a1.5 1.5 0 0 1 0 3z"
      />
    </svg>
  );
};
export default Jpg_01;
