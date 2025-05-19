import React from "react";
const GibbousMoon: React.FC<
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
        fill="currentColor"
        d="M21.5 14.688A9.008 9.008 0 0 1 9.312 2.5C4.834 3.55 1.5 7.569 1.5 12.366 1.5 17.963 6.037 22.5 11.634 22.5c4.797 0 8.817-3.334 9.866-7.812"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.5 12A8.5 8.5 0 0 0 12 3.5v-2c5.799 0 10.5 4.701 10.5 10.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GibbousMoon;
