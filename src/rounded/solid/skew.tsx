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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.96 4.287a1 1 0 0 1 1.245-.67l6.167 1.85a1 1 0 1 1-.574 1.916l-6.168-1.85a1 1 0 0 1-.67-1.246m-1.295.655A1 1 0 0 1 9.27 6.22L5.616 16.452a1 1 0 0 1-1.884-.673L7.387 5.547a1 1 0 0 1 1.278-.605m10.413 3.055a1 1 0 0 1 1.074.92l.693 9.012a1 1 0 1 1-1.994.153l-.693-9.011a1 1 0 0 1 .92-1.074M4.994 18.124a1 1 0 0 1 1.116-.868l12.03 1.503a1 1 0 1 1-.248 1.985L5.862 19.24a1 1 0 0 1-.868-1.116"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M16.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M17.25 20a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M1.25 18a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
      />
    </svg>
  );
};
export default Skew;
