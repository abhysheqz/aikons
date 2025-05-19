import React from "react";
const Logout_03: React.FC<
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
        d="m15 17.999-2 3.998L3 18v-12L13 2l2 3.999"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10 11.996h10.31m-2.31-3 3 3-3 3"
      />
    </svg>
  );
};
export default Logout_03;
