import React from "react";
const SquareLockCheck_02: React.FC<
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
        d="M18.992 12.002V9.02H15.49M11 21.99H3.001V9.02h3.47m9.019 0V6.321c-.178-3.097-2.666-4.222-4.283-4.314-1.875-.105-4.604 1.295-4.694 4.294L6.47 9.02m9.019 0H6.47M15.215 17.728l1.292 1.293 2.316-2.351m2.176 1.328a3.999 3.999 0 1 1-3.998-4 4 4 0 0 1 3.998 4Z"
      />
    </svg>
  );
};
export default SquareLockCheck_02;
