import React from "react";
const Dribbble: React.FC<
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
      <circle cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22 13.264A15.5 15.5 0 0 0 19.147 13C13.795 13 9.034 15.742 6 20M19 5c-3.13 3.667-7.832 6-13.09 6-1.346 0-2.655-.153-3.91-.441"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.618 22A18.6 18.6 0 0 0 15 18.24C15 11.926 11.834 6.347 7 3"
      />
    </svg>
  );
};
export default Dribbble;
