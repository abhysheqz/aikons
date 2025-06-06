import React from "react";
const Spirals: React.FC<
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
        d="M11.953 2C17.502 2 22 6.477 22 12s-4.498 10-10.047 10C-.63 22-1.827 4.018 11.5 5c3.35.247 6.53 3.41 6.53 7 0 4.5-2.794 6.5-6.53 6.5C4.5 18.5 3.19 8.467 11.002 9c1.506.103 3.014 1.343 3.014 3 0 1.928-1.016 3-2.895 3"
      />
    </svg>
  );
};
export default Spirals;
