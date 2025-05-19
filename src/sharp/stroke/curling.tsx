import React from "react";
const Curling: React.FC<
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
        d="M1.998 15h10"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.003 20h15.999a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1.996l-3.002-6H5.999v3h7.504l1.5 3h-10a3 3 0 0 0-3.001 3v4a3 3 0 0 0 3.001 3Z"
      />
    </svg>
  );
};
export default Curling;
