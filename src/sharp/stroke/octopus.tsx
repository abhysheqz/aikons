import React from "react";
const Octopus: React.FC<
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
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M16.093 13C17.23 12.098 18 10.85 18 9.47 18 6.72 14.945 2 12 2 9.054 2 6 6.72 6 9.47c0 1.38.77 2.628 1.908 3.53"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.012 10h-.01M10.012 10h-.01"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M17 22c-3.1-2.286-3.984-4-3.5-8 1 2 3.58 4.5 5.547 4.5 1.969 0 2.953-1.231 2.953-2.75S20.898 13 19.54 13M7 22c3.1-2.286 3.984-4 3.5-8-1 2-3.58 4.5-5.548 4.5S2 17.269 2 15.75 3.102 13 4.46 13"
      />
    </svg>
  );
};
export default Octopus;
