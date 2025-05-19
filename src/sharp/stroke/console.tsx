import React from "react";
const Console: React.FC<
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
        d="M13.004 11.026a2.003 2.003 0 0 1-2.001 2.006 2.003 2.003 0 0 1-2.001-2.006c0-1.107.895-2.005 2-2.005 1.106 0 2.002.898 2.002 2.005Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.007 9.152C19.137 5.066 15.48 2 11.101 2c-5.028 0-9.103 4.041-9.103 9.026s4.075 9.026 9.103 9.026a9 9 0 0 0 1.402-.106M17.37 4.644 15.246 6.77M6.759 15.28l-2.123 2.127"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20.626 18.126c.895-.616 1.376-1.557 1.376-2.705 0-1.878-1.565-3.4-3.496-3.4s-3.497 1.522-3.497 3.4c0 1.103.54 2.083 1.376 2.705m4.24 0c-.569.392-1.368.696-2.12.696-.796 0-1.531-.26-2.12-.696m4.24 0 .844 3.751a.1.1 0 0 1-.13.117l-2.833-.943-2.823.943a.1.1 0 0 1-.13-.117l.832-3.751"
      />
    </svg>
  );
};
export default Console;
