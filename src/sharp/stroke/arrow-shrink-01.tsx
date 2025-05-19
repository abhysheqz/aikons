import React from "react";
const ArrowShrink_01: React.FC<
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
        d="M10.51 4.503v6.008H4.502M13.515 19.523v-6.008h6.008"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.959 9.958 3 3M20.999 21 14.04 14.04"
      />
    </svg>
  );
};
export default ArrowShrink_01;
