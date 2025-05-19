import React from "react";
const City_01: React.FC<
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
        d="M16.5 8.007h-9V22h9zM10.5 12.005h3m-3 2.998h3m-3 2.998h3M4 21.999v-9.994h3.5M22 21.999H2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13 7.802V2.011a.01.01 0 0 1 .015-.009l6.977 3.979v15.432"
      />
    </svg>
  );
};
export default City_01;
