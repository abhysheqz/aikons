import React from "react";
const Building_04: React.FC<
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
        d="M11.001 2.002v15.983h-8M5.001 11.991h6M16.501 15.488h3m-3 2.996h3"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m14.001 9.994 8 2.996v8.99h-8"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M13.998 1.999H8.5L1.999 22.002h12.009V2.009a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Building_04;
