import React from "react";
const Tv_01: React.FC<
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
        d="M1.25 9.125A3.75 3.75 0 0 1 5 5.375h14a3.75 3.75 0 0 1 3.75 3.75v10a3.75 3.75 0 0 1-3.75 3.75H5a3.75 3.75 0 0 1-3.75-3.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.293 1.418a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L12 4.71z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tv_01;
