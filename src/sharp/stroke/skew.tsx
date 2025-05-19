import React from "react";
const Skew: React.FC<
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
      <circle
        cx={9}
        cy={4}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={19}
        cy={7}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={20}
        cy={20}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <circle
        cx={4}
        cy={18}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m10.917 4.575 6.168 1.85m2.07 2.57.693 9.011m-1.832 1.746-12.03-1.504M8.328 5.884 4.674 16.116"
      />
    </svg>
  );
};
export default Skew;
