import React from "react";
const Yoga_03: React.FC<
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
        d="M9 10c0 3.866 3 7 3 7s3-3.134 3-7-3-7-3-7-3 3.134-3 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.496 8.5C18.996 7 21.993 7 21.993 7s.262 4.239-2.498 7S12 17 12 17s-4.735-.239-7.495-3-2.498-7-2.498-7 2.998 0 4.497 1.5M4.5 17C3 17.5 2 19 2 21c3-2 4.004 0 6 0 2.853 0 4-2 4-4 0 2 1.147 4 4 4 1.996 0 3-2 6 0 0-2-1-3.5-2.5-4"
      />
    </svg>
  );
};
export default Yoga_03;
