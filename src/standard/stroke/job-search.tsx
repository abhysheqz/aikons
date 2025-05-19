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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 11.5v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h7.5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15.5 5.5-.793-2.775A1 1 0 0 0 13.746 2H9.254a1 1 0 0 0-.961.725L7.5 5.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.017 20.023 22 22m-.947-4.474a3.527 3.527 0 1 0-7.053 0 3.527 3.527 0 0 0 7.053 0"
      />
    </svg>
  );
};
export default JobSearch;
