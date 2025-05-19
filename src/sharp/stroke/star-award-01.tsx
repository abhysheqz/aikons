import React from "react";
const StarAward_01: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M19 9A7 7 0 1 1 5 9a7 7 0 0 1 14 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13 16 2.5 6 1.5-3.5 3 .5-2.5-5.5M11 16l-2.5 6L7 18.5 4 19l2.5-5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="m12 5 1.103 2.273 2.397.4-1.715 1.806.378 2.521L12 10.843 9.837 12l.378-2.52L8.5 7.673l2.397-.401z"
      />
    </svg>
  );
};
export default StarAward_01;
