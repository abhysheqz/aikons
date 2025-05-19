import React from "react";
const Hexagon: React.FC<
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
        d="M10.666 1.883a2.75 2.75 0 0 1 2.671 0l7 3.89a2.75 2.75 0 0 1 1.415 2.403v7.646a2.75 2.75 0 0 1-1.415 2.404l-7 3.89a2.75 2.75 0 0 1-2.67 0l-7.002-3.89a2.75 2.75 0 0 1-1.415-2.404V8.176c0-.999.542-1.919 1.415-2.404z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hexagon;
