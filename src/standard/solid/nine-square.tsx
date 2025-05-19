import React from "react";
const NineSquare: React.FC<
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
        d="M4.997 1.75a2.75 2.75 0 0 0-2.75 2.75v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm5.5 7.25a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm3 9a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h2c.35 0 .687-.06 1-.17V15a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1 1 1 0 1 0-2 0 3 3 0 0 0 3 3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NineSquare;
