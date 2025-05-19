import React from "react";
const Inequality_02: React.FC<
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
        d="M2.5 21.25h18.925v-2.5H2.5zM16.834 14.5 5.167 4.666l1.6-1.915 14.288 12.043c.401.338.549.891.37 1.385s-.647.822-1.17.822H2.5v-2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inequality_02;
