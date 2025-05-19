import React from "react";
const Investigation: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.675 19.689 21 22m-1-5.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0M7.5 7H14m-6.5 4H10"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 9V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h3.5"
      />
    </svg>
  );
};
export default Investigation;
