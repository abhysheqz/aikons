import React from "react";
const AlphabetThai: React.FC<
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
        d="M6 21v-7c0-1.672 1.603-2.534 3-2.953.048-.014.052-.101.006-.121C7.463 10.253 6 9.75 6 7.808c0-1.87 1.273-3.368 2.755-4.112Q10.106 3 11.96 3q1.615 0 2.994.605C16.946 4.435 18 6.436 18 8.715V21"
      />
    </svg>
  );
};
export default AlphabetThai;
