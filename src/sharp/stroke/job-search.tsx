import React from "react";
const JobSearch: React.FC<
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
        d="M21 12V5.5H2V21h10M16 5.5 15 2H8L7 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.017 20.023 22 22m-.947-4.474a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0Z"
      />
    </svg>
  );
};
export default JobSearch;
