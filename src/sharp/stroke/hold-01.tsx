import React from "react";
const Hold_01: React.FC<
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
        strokeWidth={1.5}
        d="M14.25 5.5a1.5 1.5 0 0 1 3 0v2m-3-2v-2a1.5 1.5 0 0 0-3 0V5m3 .5V11m-3-6a1.5 1.5 0 0 0-3 0v8.462l-1.62-1.625a1.683 1.683 0 0 0-2.51.14 1.696 1.696 0 0 0-.033 2.072l4.163 5.45V22m3-17v5m7 12.001v-2.604l1.071-1.283a4 4 0 0 0 .929-2.563V7.5a1.5 1.5 0 0 0-3 0m0 4.5V7.5"
      />
    </svg>
  );
};
export default Hold_01;
