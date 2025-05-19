import React from "react";
const SixSquare: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.997 1.75a2.75 2.75 0 0 0-2.75 2.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm6.5 4.25a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1a3 3 0 0 0-3-3h-2c-.35 0-.687.06-1 .17V9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1 1 1 0 1 0 2 0 3 3 0 0 0-3-3zm0 10a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SixSquare;
