import React from "react";
const LinkSquare_01: React.FC<
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
        d="M2 5a3 3 0 0 1 3-3h5.5a1 1 0 1 1 0 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5a1 1 0 1 1 2 0V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.076 2.617A1 1 0 0 1 16 2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1.707.707L18.5 6.914l-2.793 2.793a1 1 0 0 1-1.414-1.414L17.086 5.5l-1.793-1.793a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LinkSquare_01;
