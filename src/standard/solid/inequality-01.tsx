import React from "react";
const Inequality_01: React.FC<
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
        d="M2 20a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1M18.068 3.357a1 1 0 0 1-.124 1.41L5.747 15H21a1 1 0 1 1 0 2H3a1 1 0 0 1-.643-1.766l14.302-12a1 1 0 0 1 1.409.123"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Inequality_01;
