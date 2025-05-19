import React from "react";
const PrisonGuard: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M19 7.999H5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 7.999 1.5-3.5L12 2 5.5 4.5 7 7.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 7.999v2a5 5 0 0 1-10 0v-2M9.025 14.003v3.044m0 0 2.994 1.963L15.01 17m-5.986.046-6.66 1.86A.5.5 0 0 0 2 19.39v2.613m13.011-5v-3.004m0 3.003 6.627 1.905a.5.5 0 0 1 .361.48v2.616"
      />
    </svg>
  );
};
export default PrisonGuard;
