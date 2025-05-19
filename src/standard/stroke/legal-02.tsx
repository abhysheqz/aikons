import React from "react";
const Legal_02: React.FC<
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
        d="m13 21 1.703-2.555a1 1 0 0 1 .832-.445h2.93a1 1 0 0 1 .832.445L21 21m-9 0h10"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 9.798-9.608.694C3.103 10.585 2 9.665 2 8.498s1.103-2.087 2.392-1.993L14 7.198"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 3c-.33 1.818-.5 3.66-.5 5.5s.17 3.682.5 5.5m0-11h-1m1 0h6m-6 11h-1m1 0h6m0-11a30.8 30.8 0 0 1 0 11m0-11h1m-1 11h1"
      />
    </svg>
  );
};
export default Legal_02;
