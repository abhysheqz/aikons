import React from "react";
const Jumpers: React.FC<
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
        d="M14.625 3.5 12 7 9.375 3.5M17 8v11l-1 2H8l-1-2V8m10.199 2.637L19.5 18l1 1.5 2-.5v-2L19 5l-4-2H9L5 5 1.5 17v2l2 .5 1-1.5 2.301-7.363"
      />
    </svg>
  );
};
export default Jumpers;
