import React from "react";
const WattpadSquare: React.FC<
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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm4.26 9.026c.225-.67.405-2.147-.675-2.684-1.35-.672-3.376 1.006-2.7 5.034.674 4.027 3.375 5.705 5.738-.336.864 4.638 3.558 2.603 4.569.567 1.01-2.036 2.02-3.053 2.02-3.053 2.022-2.036.752-3.393-.942-2.715-1.355.543-2.372 1.82-2.71 2.39 0-5.078-3.916-2.031-5.3.797"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WattpadSquare;
